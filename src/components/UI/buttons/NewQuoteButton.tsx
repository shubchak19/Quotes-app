import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setRandomQuote } from "../../../redux/slices/quoteSlice";
import Button from "./Button";

export default function NewQuoteButton() {
  const dispatch = useAppDispatch();
  const quotes = useAppSelector((state) => state.fetchData.data);
  const { button } = useAppSelector((state) => state.theme.current);

  return (
    <Button
      data-testid="new-quote-button"
      title="New quote button"
      color={button.background}
      onClick={() => dispatch(setRandomQuote(quotes))}
    >
      New Quote
    </Button>
  );
}
