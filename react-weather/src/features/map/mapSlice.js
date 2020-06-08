import { createSlice } from "@reduxjs/toolkit"

const weatherMapSlice = createSlice ({
    name: "weatherMap",
    initialState: {
        lat: 0,
        lon: 0,
        zoom: 13,
    },
    reducers: {
        relocateMap: (state, action) => {
            state.lat = action.payload.lat;
            state.lon = action.payload.lon;
        }
    },

})


export const {
    relocateMap,
} = weatherMapSlice.actions;
export default weatherMapSlice.reducer;