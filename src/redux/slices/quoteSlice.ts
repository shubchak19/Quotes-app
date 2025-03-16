import { FullQuoteObject, QuoteObject } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  quoteObject: QuoteObject | null;
  isLoading: boolean;
  error: string;
};

export const fetchQuote = createAsyncThunk("fetchQuote", async () => {
  try {
    const apikey = import.meta.env.VITE_APININJA_KEY;
    const url = import.meta.env.VITE_QUOTES_URL;
    const response = await axios.get(url, {
      headers: {
        "X-Api-Key": apikey,
      },
    });
    return response.data[0];
  } catch (error: unknown) {
    if(error instanceof Error) throw new Error(error.message);
  }
});

const initialState: InitialState = {
  quoteObject: null,
  isLoading: false,
  error: "",
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuote: (state, action: PayloadAction<QuoteObject | FullQuoteObject>)=>{
      if(!action.payload) return;
      state.quoteObject = action.payload;
      state.error = "";
      state.isLoading = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchQuote.fulfilled,
      (state, action: PayloadAction<QuoteObject>) => {
        state.isLoading = false;
        state.error = "";
        state.quoteObject = action.payload;
      }
    );
    builder.addCase(fetchQuote.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchQuote.rejected, (state, {error}) => {
      state.isLoading = false;
      if(error.message) state.error = error.message;
      state.quoteObject = null;
    });
  },
});

export default quoteSlice.reducer;
export const { setQuote } = quoteSlice.actions;
