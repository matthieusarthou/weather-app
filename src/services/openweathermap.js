import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiKey = process.env.REACT_APP_WEATHER_API;

export const openweathermapApi = createApi({
  reducerPath: 'openweathermapApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/' }),
  endpoints: (builder) => ({
    getCityLatAndLon: builder.query({
      query: (cityName) => {
        return `geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
      },
    }),
    getCityInfo: builder.query({
      query: (cityLatAndLon) => {
        return cityLatAndLon ? `data/3.0/onecall?lat=${cityLatAndLon[0].lat}&lon=${cityLatAndLon[0].lon}&exclude=hourly,daily&units=metric&appid=${apiKey}` : '';
      },
    }),
  }),
});

export const { useGetCityLatAndLonQuery, useGetCityInfoQuery } = openweathermapApi;
