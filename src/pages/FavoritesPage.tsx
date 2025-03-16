import AnimatedSection from "@/components/animation/AnimatedSection";
import ViewButton from "@/components/buttons/ViewButton";
import QuoteDisplay from "@/components/ui/QuoteDisplay";
import UtilityButtons from "@/components/ui/UtilityButtons";
import GridLayout from "@/layout/GridLayout";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearAllFavorites } from "@/redux/slices/favoritesSlice";
import { BookmarkXIcon, StarIcon } from "lucide-react";
function FavoritesPage() {
  const favoriteQuotes = useAppSelector((state) => state.favorites.quotes);
  const dispatch = useAppDispatch();

  if (favoriteQuotes.length <= 0)
    return (
      <AnimatedSection className="w-full h-full p-6 text-gray-500 flex-center gap-4">
        <h2 className="text-xl font-bold">
          <BookmarkXIcon className="inline mx-2 -mt-1" />
          No Favorites
        </h2>
        <p className="text-center text-balance max-w-lg">
          It seems like you haven't added any quotes to your favorites yet. Head
          over to the quote page and mark your favorite quotes by clicking on
          the <StarIcon className="inline mx-1 -mt-1" size={16} /> icon. Once
          done, you'll find your favorite quotes right here.
        </p>
      </AnimatedSection>
    );

  return (
    <GridLayout heading="Favorites" clearAll={()=> dispatch(clearAllFavorites())}>
      {favoriteQuotes.map((favoriteQuote) => (
        <article
          key={favoriteQuote.quote}
          className="h-full w-full rounded-xl overflow-hidden bg-slate-200 relative min-h-[30em] lg:min-h-[25em]"
        >
          <QuoteDisplay
            quoteObject={favoriteQuote}
            background={favoriteQuote.image.url}
          />
          <div
            className={`absolute horizontal bottom-0 left-0 p-4 pr-6 w-full flex justify-between items-center gap-3`}
          >
            <UtilityButtons quoteObject={favoriteQuote} />
            <ViewButton quoteObject={favoriteQuote} />
          </div>
        </article>
      ))}
    </GridLayout>
  );
}

export default FavoritesPage;
