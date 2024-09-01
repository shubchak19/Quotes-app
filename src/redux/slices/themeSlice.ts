import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../../constants/theme";
import { CssColorType } from "../../types";

type Themetype = {
  name: string;
  color: CssColorType;
  background: CssColorType;
  text: CssColorType;
  utility: {
    background: CssColorType;
    text: CssColorType;
  };
  button: {
    background: CssColorType;
  };
  loading: {
    base: CssColorType;
    highlight: CssColorType;
  };
  favorite: {
    background: CssColorType;
  };
};

export const THEME_KEY = "quoteTheme";

const initialState: { current: Themetype } = {
  current: themes[Number(localStorage.getItem(THEME_KEY))],
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setTheme: (state, action: { payload: number }) => {
      state.current = themes[action.payload];
      localStorage.setItem(THEME_KEY, String(action.payload));
    },
  },
});

export const { setTheme } = colorSlice.actions;
export default colorSlice.reducer;
