import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getWeather, getForecast } from "../../api/weatherAPI"
import { createObjectFilter, flattenObject, formatDT, formatSpeed, formatTemp } from "../../utils/forecastParserUtils";

export const fetchWeatherByCity = createAsyncThunk(
    "weather/fetchByCity",
    async (city) => {
        const response = await getWeather(city);
        return await response.json();
    }
)

export const fetchForecastByCity = createAsyncThunk(
    "weather/fetchForecastByCity",
    async (city) => {
        const response = await getForecast(city);
        return await response.json();
    }
)

const forecastListParser = (list) => {
    const myList = [];
    const myFilter = createObjectFilter([ 'dt', 'main_temp', 'wind_speed' ]);
    let newObject;
    list.forEach(element => {
        element = flattenObject(element);
        newObject = myFilter(element);
        newObject = formatDT(newObject, 'dt');
        newObject = formatTemp(newObject, 'main_temp');
        newObject = formatSpeed(newObject, 'wind_speed');
        myList.push(newObject);
    });
    return myList;
}


const weatherCardsSlice = createSlice ({
    name: "weatherCards",
    initialState: {
        counter: 0,
        loading: false,
        forecastLoading: false,
        forecast: [],
        cards: [],
        isError: false,
        forecastIsError: false,
        lat: -33.437492,
        lon: -70.651062,
        zoom: 13,
        currentForecastId: null,
    },
    reducers: {
        
        addCityWeather: (state, action) => {
            state.cards.push(action);
            state.counter++;
        },
        removeCityWeather: (state, action) => {
            state.cards = state.cards.filter(cityWeather => cityWeather.id !== action.payload.id);
            state.counter--;
        }
    },
    extraReducers: {
        [fetchWeatherByCity.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action);
            if (state.cards.filter(e => e.id === action.payload.id).length === 0) {
                try {
                    state.isError = false;
                    const { id, name, main, coord } = action.payload;
                    const { feels_like, humidity, pressure, temp, temp_max, temp_min } = main;
                    const { lat, lon } = coord;
                    state.cards.push({id, name, feels_like, humidity,
                                      pressure, temp, temp_max, temp_min, lat, lon });
                    state.lat = lat;
                    state.lon = lon;
                    state.counter++;
                } catch (error) {
                    console.log(error);
                    state.isError = true;
                }
            }
        },
        [fetchForecastByCity.pending]: (state, action) => {
            state.forecastLoading = true;
        },
        [fetchForecastByCity.rejected]: (state, action) => {
            state.forecastLoading = false;
            console.log("error");
        },
        [fetchForecastByCity.fulfilled]: (state, action) => {
            state.forecastLoading = false;
            console.log(action);
            if (state.forecast.filter(e => e.id === action.payload.city.id).length === 0) {
                try {
                    state.forecastIsError = false;
                    let { list } = action.payload;
                    list = forecastListParser(list);
                    let id = action.payload.city.id;
                    state.forecast.push({ id, list });
                    state.currentForecastId = id;
                } catch (error) {
                    console.log(error);
                    state.forecastIsError = true;
                    
                }
            } else {
                let id = action.payload.city.id;
                state.forecastIsError = false;
                state.currentForecastId = id;
            }
        },
        [fetchWeatherByCity.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchWeatherByCity.rejected]: (state, action) => {
            state.loading = false;
            console.log("error");
        },
    }
})


export const {
    addCityWeather,
    removeCityWeather,
} = weatherCardsSlice.actions;

export default weatherCardsSlice.reducer;