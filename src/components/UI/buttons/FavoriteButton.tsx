import { StarIcon } from "lucide-react";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/slices/favoriteSlice";
import { QuoteType } from "../../../types";

export default function FavoriteButton({ quoteObj }: { quoteObj: QuoteType }) {
  const favoriteQuotes = useAppSelector((state) => state.favorite.quotes);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!favoriteQuotes) return;
    setIsFavorite(favoriteQuotes.some(({ quote }) => quote === quoteObj.quote));
  }, [quoteObj, favoriteQuotes]);

  function handleClick() {
    if (isFavorite) {
      dispatch(removeFromFavorites(quoteObj));
    } else {
      dispatch(addToFavorites(quoteObj));
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <Button
      onClick={handleClick}
      size={30}
      variant="round"
      data-title={isFavorite ? "Added to favorites" : "Add to favorites"}
      data-testid="favorite-button"
      title="Add to favorites button"
    >
      <StarIcon fill={isFavorite ? "orange" : "transparent"} />
    </Button>
  );
}
