import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuoteType } from "../../types";

const FAVORITE_KEY = "favoriteQuotes";

function saveToStorage(value: QuoteType[]) {
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(value));
}

function getFromStorage() {
  const value = localStorage.getItem(FAVORITE_KEY);
  if (value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

const initialState: { quotes: QuoteType[] | [] | null } = {
  quotes: getFromStorage(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<QuoteType>) => {
      state.quotes = [action.payload, ...(state.quotes ?? [])];
      saveToStorage(state.quotes);
    },
    removeFromFavorites: (state, action: PayloadAction<QuoteType>) => {
      if (!state.quotes) return;
      state.quotes = state.quotes.filter(
        ({ quote }) => quote !== action.payload.quote
      );
      saveToStorage(state.quotes);
    },
    setDefaultFavorites: (state, action: PayloadAction<QuoteType[]>) => {
      if (!state.quotes) {
        state.quotes = action.payload.slice(0, 8); // Set the first 8 quotes as default favorites
        saveToStorage(state.quotes);
      }
    },
  },
});

export default favoritesSlice.reducer;
export const { addToFavorites, removeFromFavorites, setDefaultFavorites } =
  favoritesSlice.actions;
