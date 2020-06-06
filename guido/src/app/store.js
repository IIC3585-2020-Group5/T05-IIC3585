import { configureStore } from '@reduxjs/toolkit';
import weatherCardsReducer from '../features/weather/weatherCardSlice';

export default configureStore({
  reducer: {
    weatherCards: weatherCardsReducer,
    // weatherMap: weatherMapReducer,
  },
});

