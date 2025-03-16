import { FullQuoteObject, QuoteObject } from "@/types";
import { getFromStorage, saveToStorage } from "@/utils/localStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const FAVORITES_KEY = "quotesfavorites";

const initialState: { quotes: FullQuoteObject[] | [] } = {
  quotes: getFromStorage(FAVORITES_KEY) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<FullQuoteObject>) => {
      if(!action.payload) return;
      state.quotes = [action.payload, ...state.quotes];
      saveToStorage(FAVORITES_KEY, state.quotes);
    },
    removeFromFavorites: (state, action: PayloadAction<QuoteObject>) => {
      if(!action.payload) return;
      state.quotes = state.quotes.filter(
        ({ quote }) => quote !== action.payload.quote
      );
      saveToStorage(FAVORITES_KEY, state.quotes);
    },
    clearAllFavorites: (state) => {
      state.quotes = [];
      saveToStorage(FAVORITES_KEY, state.quotes);
    },
  },
});

export default favoritesSlice.reducer;
export const { addToFavorites, removeFromFavorites, clearAllFavorites } =
  favoritesSlice.actions;
