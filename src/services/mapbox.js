import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiKey = process.env.REACT_APP_CITIES_LIST_API;

export const mapboxApi = createApi({
  reducerPath: 'mapboxApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mapbox.com/geocoding/v5/' }),
  endpoints: (builder) => ({
    getCities: builder.query({
      query: (text) => {
        return `mapbox.places/${text}.json?access_token=${apiKey}&cachebuster=1625641871908&autocomplete=true&types=place`;
      },
    }),
  }),
});

export const { useGetCitiesQuery } = mapboxApi;
