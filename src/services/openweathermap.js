import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiKey = process.env.REACT_APP_WEATHER_API;

export const openweathermapApi = createApi({
  reducerPath: 'openweathermapApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/' }),
  endpoints: (builder) => ({
    getCityInfo: builder.query({
      query: (cityName) => {
        return `data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
      },
    }),
  }),
});

export const { useGetCityInfoQuery } = openweathermapApi;
