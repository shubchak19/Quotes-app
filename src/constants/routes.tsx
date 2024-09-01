import QuotePage from "../components/pages/QuotePage";
import RouteError from "../components/UI/components/RouteError";
import App from "../App";
import FavoritePage from "../components/pages/FavoritesPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <QuotePage /> },
      {
        path: "favorites",
        element: <FavoritePage />,
      },
    ],
  },
];
