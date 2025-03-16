import AnimatedSection from "@/components/animation/AnimatedSection";
import QuoteDisplay from "@/components/ui/QuoteDisplay";
import UtilityButtons from "@/components/ui/UtilityButtons";
import useRandomQuote from "@/hooks/useRandomQuote";
import Skeleton from "react-loading-skeleton";
import ErrorPage from "./ErrorPage";

function QuotePage() {
  const { quoteObject, image, isLoading, error, getNewQuote } = useRandomQuote();
  if (error) return <ErrorPage />;

  return (
    <AnimatedSection className="bg-black w-full h-full md:text-xl lg:text-2xl">
      <QuoteDisplay
        quoteObject={quoteObject}
        background={image?.url}
        isLoading={isLoading}
      />
      <div
        className={`absolute sm:hidden bottom-15 left-2 right-2 text-center`}
      >
        {!quoteObject || isLoading ? (
          <Skeleton width={"95vw"} height={30} />
        ) : (
          <UtilityButtons quoteObject={quoteObject} />
        )}
      </div>
      <button
        title="New quote button"
        className="bg-orange-600 text-base hover:bg-orange-500 px-5 py-2 rounded-md font-bold absolute sm:bottom-6 sm:right-6 sm:left-auto w-auto left-2 right-2 bottom-2 sm:w-fit"
        onClick={getNewQuote}
      >
        New Quote
      </button>
    </AnimatedSection>
  );
}

export default QuotePage;
