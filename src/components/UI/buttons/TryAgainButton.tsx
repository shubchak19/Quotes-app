import { useAppDispatch } from "../../../redux/hooks";
import { fetchQuotes } from "../../../redux/slices/fetchSlice";
import Button from "./Button";

export default function TryAgainButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      title="Connect to server"
      color="hsl(210, 90%, 45%)"
      onClick={() => dispatch(fetchQuotes())}
    >
      Try Again
    </Button>
  );
}
