import { http, HttpResponse } from "msw";
import { quotes } from "./mockData";
import config from "../config";

export const handlers = [
  http.get(config.QUOTES_URL, () => {
    return HttpResponse.json(quotes);
  }),
];
