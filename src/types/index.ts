import { CSSProperties } from "react";
import store from "../redux/store";

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export type QuoteType = {
  quote: string;
  author: string;
};

export type CssColorType = CSSProperties["color"];
