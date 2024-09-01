import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../../redux/hooks";
import { fade, item } from "../../constants/variants";
import Utility from "../UI/components/Utility";

export default function FavoritePage() {
  const favoriteQuotes = useAppSelector((state) => state.favorite.quotes);
  const { favorite, text } = useAppSelector((state) => state.theme.current);

  if (!favoriteQuotes || favoriteQuotes?.length === 0)
    return (
      <p
        data-testid="favorites-page"
        className="flex-1 flex-col flex justify-center items-center text-pretty"
        style={{ color: text }}
      >
        You have no favorite quotes.
        <br /> Go to Quotes page and add some quotes to favorites
      </p>
    );
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fade}
      data-testid="favorites-page"
      className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 place-content-start animate-fade-fast overflow-x-hidden overflow-y-scroll px-1"
    >
      <AnimatePresence mode="popLayout">
        {favoriteQuotes.map((quoteObj, index) => (
          <motion.li
            layout={true}
            key={quoteObj.quote}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={item}
            custom={index}
            className={`flex h-fit flex-col font-medium rounded-lg bg-green-600 transition-colors duration-1000 relative p-10 text-white`}
            style={{
              backgroundColor: favorite.background,
            }}
          >
            <figure className=" flex-1 min-h-[200px] flex flex-col justify-center">
              <blockquote className="text-pretty">{quoteObj.quote}</blockquote>
              <figcaption className="mt-2 italic opacity-80 before:content-['-'] before:mr-2 text-sm">
                {quoteObj.author}
              </figcaption>
            </figure>
            <div className={`flex justify-center w-full gap-2`}>
              <Utility quoteObj={quoteObj} />
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
