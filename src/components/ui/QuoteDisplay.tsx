import defaultImage from "@/assets/images/default_background_image.jpg";
import { QuoteObject } from "@/types";
import { AnimatePresence, motion } from "motion/react";
import Skeleton from "react-loading-skeleton";
import { fade } from "../animation/variants";

type QuoteDisplayProps = {
  quoteObject: QuoteObject | null;
  background?: string;
  isLoading?: boolean;
};
function QuoteDisplay(props: QuoteDisplayProps) {
  const { quoteObject, background, isLoading } = props;

  return (
    <figure
      style={{ backgroundImage: `url(${background || defaultImage})` }}
      className={`w-full h-full transition-[background] text-center duration-1000 bg-cover bg-center bg-no-repeat flex-center curtain p-6`}
    >
      <AnimatePresence mode="popLayout">
        {!quoteObject || isLoading ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fade}
            className="flex-center"
          >
            <Skeleton width={"70vw"} height={28} className="max-w-[18em]" />
            <Skeleton width={"55vw"} height={28} className="max-w-[15em]" />
            <Skeleton width={"65vw"} height={28} className="max-w-[19em]" />
            <Skeleton width={"60vw"} height={28} className="max-w-[16em]" />
            <Skeleton height={25} width={100} className="mt-4" />
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fade}
            key={quoteObject.author}
          >
            <blockquote className="relative text-pretty text-[1em] max-w-[23em] font-bold">
              {quoteObject?.quote}
            </blockquote>
            <figcaption
              role="figcaption"
              className="mt-[1em] italic before:content-['-'] text-base before:mr-2 opacity-90"
            >
              {`${quoteObject?.author}`}
            </figcaption>
          </motion.div>
        )}
      </AnimatePresence>
    </figure>
  );
}

export default QuoteDisplay;
