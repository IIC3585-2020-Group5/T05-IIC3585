import { configureStore } from '@reduxjs/toolkit';
import weatherCardsReducer from '../features/weather/weatherCardSlice';
import weatherMapReducer from '../features/map/mapSlice';

export default configureStore({
  reducer: {
    weatherCards: weatherCardsReducer,
    // weatherMap: weatherMapReducer,
  },
});

