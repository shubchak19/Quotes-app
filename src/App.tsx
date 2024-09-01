import { fetchQuotes } from "./redux/slices/fetchSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import ErrorPage from "./components/pages/ErrorPage";
import { setRandomQuote } from "./redux/slices/quoteSlice";
import AnimatedOutlet from "./components/UI/components/AnimatedOutlet";
import NavBar from "./components/UI/navigation/NavBar";
import { setDefaultFavorites } from "./redux/slices/favoriteSlice";
import AppLoading from "./components/pages/AppLoading";

export default function App() {
  const dispatch = useAppDispatch();
  const {
    error,
    data: quotes,
    isLoading,
  } = useAppSelector((state) => state.fetchData);
  const { background } = useAppSelector((state) => state.theme.current);

  // Initial fetch for data
  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  useEffect(() => {
    if (quotes) {
      dispatch(setRandomQuote(quotes)); // Sets random quote
      dispatch(setDefaultFavorites(quotes)); // Set default favorites
    }
  }, [dispatch, quotes]);

  if (error) return <ErrorPage />;
  if (isLoading) return <AppLoading />;

  return (
    <article
      className={`w-screen h-screen overflow-hidden flex flex-col font-medium text-center transition-colors duration-1000 p-5 sm:p-8 min-w-[280px] relative`}
      style={{
        backgroundColor: background,
      }}
    >
      <NavBar />
      <AnimatedOutlet />
    </article>
  );
}
