import NewQuoteButton from "../UI/buttons/NewQuoteButton";
import { useAppSelector } from "../../redux/hooks";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { fade } from "../../constants/variants";
import Utility from "../UI/components/Utility";

export default function QuotePage() {
  const currentQuote = useAppSelector((state) => state.quote.current);
  const { text, utility } = useAppSelector((state) => state.theme.current);
  if (!currentQuote) return null;

  return (
    <MotionConfig transition={{ duration: 0.4 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fade}
        className="flex-1 flex flex-col"
        data-testid="quote-page"
      >
        <div className="flex-1 flex flex-col justify-center items-center min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={currentQuote.quote}
              className={`sm:max-w-[50vw] transition-colors duration-1000 font-niccone p-4 text-3xl sm:text-4xl xl:text-[2.55rem] xl:leading-[1.15em]`}
              style={{ color: text }}
            >
              <blockquote className="relative  text-pretty">
                {currentQuote.quote}
              </blockquote>
              <figcaption
                role="figcaption"
                className="mt-6 text-[0.7em] opacity-95 before:content-['-'] before:mr-2"
              >
                {`${currentQuote.author}`}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 w-full"
        >
          <div
            className={`flex items-center justify-center gap-4 transition-colors duration-1000 rounded-full px-5 py-2 utility min-w-fit`}
            style={{
              backgroundColor: utility.background,
              color: utility.text,
            }}
          >
            <Utility quoteObj={currentQuote} />
          </div>
          <NewQuoteButton />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
