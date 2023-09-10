import { configureStore } from '@reduxjs/toolkit';
import { openweathermapApi } from '../services/openweathermap';
import { mapboxApi } from '../services/mapbox';

export const store = configureStore({
  reducer: {
    [openweathermapApi.reducerPath]: openweathermapApi.reducer,
    [mapboxApi.reducerPath]: mapboxApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openweathermapApi.middleware, mapboxApi.middleware),
});
