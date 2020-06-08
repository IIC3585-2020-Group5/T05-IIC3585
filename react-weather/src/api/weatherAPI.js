

export const getWeather = async (city) => {
    let response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
    return response;
}

export const getForecast = async (city) => {
    let response = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
    return response;
}