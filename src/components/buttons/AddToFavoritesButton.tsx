import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/redux/slices/favoritesSlice";
import { QuoteObject } from "@/types";
import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";

type AddToFavoritesButtonProps = {
  quoteObject: QuoteObject;
};

function AddToFavoritesButton({ quoteObject }: AddToFavoritesButtonProps) {
  const favoriteQuotes = useAppSelector((state) => state.favorites.quotes);
  const { current: image } = useAppSelector((state) => state.image);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!favoriteQuotes) return;
    const isFavorite = favoriteQuotes.some(
      ({ quote }) => quote === quoteObject.quote
    );
    setIsFavorite(isFavorite);
  }, [quoteObject, favoriteQuotes]);

  if (!quoteObject) {
    console.error(
      "quoteObject prop is missing in AddToFavoritesButton component"
    );
    return null;
  }

  function handleClick() {
    if (isFavorite) dispatch(removeFromFavorites(quoteObject));
    if (!isFavorite && image)
      dispatch(addToFavorites({ ...quoteObject, image: image }));
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      title="Add to favorites button"
      className="p-2"
      onClick={handleClick}
      data-title={isFavorite ? "Added to favorites" : "Add to favorites"}
    >
      <StarIcon fill={isFavorite ? "orange" : "transparent"} size={"1.2em"} />
    </button>
  );
}

export default AddToFavoritesButton;
