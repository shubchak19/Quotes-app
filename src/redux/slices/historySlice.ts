import { FullQuoteObject } from "@/types";
import { getFromStorage, saveToStorage } from "@/utils/localStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const HISTORY_KEY = "quotesHistory";

const initialState: { quotes: FullQuoteObject[] | [] } = {
  quotes: getFromStorage(HISTORY_KEY) || [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<FullQuoteObject>) => {
      if(!action.payload) return;
      const quoteExists = state.quotes.some(
        (quote) => quote.quote === action.payload.quote
      );
      if (!quoteExists) {
        state.quotes = [action.payload, ...state.quotes];
        saveToStorage(HISTORY_KEY, state.quotes);
      }
    },
    removeFromHistory: (state, action: PayloadAction<FullQuoteObject>) => {
      if(!action.payload) return;
      state.quotes = state.quotes.filter(
        ({ quote }) => quote !== action.payload.quote
      );
      saveToStorage(HISTORY_KEY, state.quotes);
    },
    clearAllHistory: (state) => {
      state.quotes = [];
      saveToStorage(HISTORY_KEY, state.quotes);
    },
  },
});

export default historySlice.reducer;
export const { addToHistory, clearAllHistory, removeFromHistory } =
  historySlice.actions;
