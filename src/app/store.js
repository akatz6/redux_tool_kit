import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import rickAndMortyReducer from "../components/RickAndMorty/RickAndMortySlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    rickAndMorty: rickAndMortyReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(api.middleware),
});

export default store;
