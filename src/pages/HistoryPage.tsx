import AnimatedSection from "@/components/animation/AnimatedSection";
import DeleteButton from "@/components/buttons/DeleteButton";
import ViewButton from "@/components/buttons/ViewButton";
import QuoteDisplay from "@/components/ui/QuoteDisplay";
import GridLayout from "@/layout/GridLayout";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearAllHistory } from "@/redux/slices/historySlice";
import { HistoryIcon } from "lucide-react";
function HistoryPage() {
  const quotesHistory = useAppSelector((state) => state.history.quotes);
  const dispatch = useAppDispatch();
  if (quotesHistory.length <= 0)
    return (
      <AnimatedSection className="w-full h-full p-6 text-center text-gray-500 flex-center gap-4">
        <h2 className="text-xl font-bold">
          <HistoryIcon className="inline mx-2 -mt-1" />
          No History
        </h2>
        <p className="text-center text-pretty max-w-lg">
        You haven't explored any quotes yet! Head over to the quote page and explore some motivating quotes by clicking the "New Quote" button. Start your journey, and your quotes history will be available here.
        </p>
      </AnimatedSection>
    );

  return (
    <GridLayout heading="History" clearAll={()=> dispatch(clearAllHistory())}>
      {quotesHistory.map((quoteObject) => (
        <article
          key={quoteObject.quote}
          className="w-full h-full rounded-xl overflow-hidden bg-slate-200 relative min-h-[30em] lg:min-h-[25em]"
        >
          <QuoteDisplay
            quoteObject={quoteObject}
            background={quoteObject.image.url}
          />
          <div className="absolute flex gap-4 justify-between bottom-0 right-0 text-2xl p-4 pr-6 w-full h-fit horizontal">
            <DeleteButton quoteObject={quoteObject}/>
            <ViewButton quoteObject={quoteObject} />
          </div>
        </article>
      ))}
    </GridLayout>
  );
}

export default HistoryPage;
