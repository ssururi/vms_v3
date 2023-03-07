import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: 'vmsApi',
    tagTypes: ['Guests'],
    endpoints: (builder) => ({
        getGuests: builder.query({
            query: () => 'guest',
            providesTags: ['Guests']
        })
    })
});

export const { useGetGuestsQuery } = api;
