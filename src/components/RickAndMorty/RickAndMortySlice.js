import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const rickAndMortyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => ({
        url: `?page=1`,
        method: "GET",
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

const rickAndMortySlice = createSlice({
  name: "rickAndMorty",
  initialState: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getCharacters.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default rickAndMortySlice.reducer;

export const { useGetCharactersQuery } = rickAndMortyApi;
