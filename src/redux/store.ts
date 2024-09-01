import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./slices/fetchSlice";
import quoteReducer from "./slices/quoteSlice";
import themeReducer from "./slices/themeSlice";
import favoritesReducer from "./slices/favoriteSlice";
import menuReducer from "./slices/menuSlice";

const store = configureStore({
  reducer: {
    fetchData: fetchReducer,
    quote: quoteReducer,
    theme: themeReducer,
    favorite: favoritesReducer,
    menu: menuReducer,
  },
});

export default store;
