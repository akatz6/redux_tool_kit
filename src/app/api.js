import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://rickandmortyapi.com/api/character",
        prepareHeaders:(headers) => {
            return headers;
        }
    }),
    endpoints:() => ({})
})