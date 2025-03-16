import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favoritesSlice";
import historyReducer from "./slices/historySlice";
import imageReducer from "./slices/imageSlice";
import quoteReducer from "./slices/quoteSlice";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
    favorites: favoritesReducer,
    image: imageReducer,
    history: historyReducer,
  },
});

export default store;
