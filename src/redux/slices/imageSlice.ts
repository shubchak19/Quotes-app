import { ImageObject, PexelsData } from "@/types";
import createImageObject from "@/utils/createImageObject";
import getRandomNumber from "@/utils/getRandomNumber";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  allImages: ImageObject[];
  current: ImageObject | null;
  isLoading: boolean;
  error: string;
};

export const fetchImage = createAsyncThunk("fetchImage", async () => {
  try {
    const apikey = import.meta.env.VITE_PEXELS_KEY;
    const url = `${import.meta.env.VITE_IMAGE_URL}&page=${getRandomNumber(10)}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: apikey,
      },
    });
    return response.data.photos as PexelsData[];
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
  }
});

const initialState: InitialState = {
  allImages: [],
  current: null,
  isLoading: false,
  error: "",
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<ImageObject>) => {
      if(!action.payload) return;
      state.error = "";
      state.isLoading = false;
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      if (action.payload) {
        state.allImages = action.payload.map((obj) => createImageObject(obj));
      }
    });
    builder.addCase(fetchImage.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchImage.rejected, (state, { error }) => {
      state.isLoading = false;
      if (error.message) state.error = error.message;
    });
  },
});

export default imageSlice.reducer;
export const { setImage } = imageSlice.actions;
