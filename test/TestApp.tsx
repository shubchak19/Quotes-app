import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import React from "react";
import { routes } from "../src/constants/routes";

const router = createMemoryRouter(routes, { initialEntries: ["/"] });

export default function TestApp() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
