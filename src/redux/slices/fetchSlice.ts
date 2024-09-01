import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import config from "../../config";
import { QuoteType } from "../../types";

type DataType = {
  data: null | QuoteType[];
  isLoading: boolean;
  error: SerializedError | null;
};

export const fetchQuotes = createAsyncThunk("fetchQuotes", async () => {
  try {
    const response = await fetch(config.QUOTES_URL);
    if (!response.ok) {
      throw new Error("Network Response was not ok!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("failed to fetch data: " + error);
  }
});

const initialState: DataType = {
  data: null,
  isLoading: false,
  error: null,
};

const fetchSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      const quotesArray: QuoteType[] = action.payload?.quotes || [];
      state.isLoading = false;
      state.error = null;
      state.data = quotesArray.filter(
        ({ quote, author }) =>
          quote.trim() && quote.length <= 210 && !/unknown/i.test(author)
      );
    });
    builder.addCase(fetchQuotes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.data = null;
    });
    builder.addCase(fetchQuotes.rejected, (state, { error }) => {
      state.error = error;
      state.isLoading = false;
    });
  },
});

export default fetchSlice.reducer;
