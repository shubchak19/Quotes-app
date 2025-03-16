import App from "@/App";
import withLazyLoad from "@/hoc/withLazyLoad";
import { createBrowserRouter } from "react-router-dom";

const QuotePage = withLazyLoad(() => import("@/pages/QuotePage"));
const FavoritesPage = withLazyLoad(() => import("@/pages/FavoritesPage"));
const HistoryPage = withLazyLoad(() => import("@/pages/HistoryPage"));
const ErrorPage = withLazyLoad(() => import("@/pages/ErrorPage"));

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <QuotePage /> },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
