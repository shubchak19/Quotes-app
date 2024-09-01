import { createSlice } from "@reduxjs/toolkit";
import { QuoteType } from "../../types";

const initialState: { current: QuoteType | null } = {
  current: null,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setRandomQuote: (state, action: { payload: QuoteType[] | null }) => {
      const quotes = action.payload;
      if (quotes) {
        let index;
        do {
          index = Math.floor(Math.random() * quotes?.length);
        } while (quotes[index].quote === state.current?.quote);
        state.current = quotes[index];
      }
    },
  },
});

export default quoteSlice.reducer;
export const { setRandomQuote } = quoteSlice.actions;
