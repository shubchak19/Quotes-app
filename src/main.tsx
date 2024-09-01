import React from "react";
import ReactDOM from "react-dom/client";
import "./assests/css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { routes } from "./constants/routes.tsx";

const router = createBrowserRouter(routes, { basename: "/quote-app/" });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
