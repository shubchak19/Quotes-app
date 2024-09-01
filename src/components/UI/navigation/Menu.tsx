import { useAppSelector } from "../../../redux/hooks";
import { AnimatePresence, motion } from "framer-motion";
import Themes from "../components/Themes";
import QuoteLink from "../links/QuoteLink";
import FavoriteLink from "../links/FavoriteLink";
import MenuButton from "../buttons/MenuButton";

export default function Menu() {
  const { utility } = useAppSelector((state) => state.theme.current);
  const isOpen = useAppSelector((state) => state.menu.isOpen);

  return (
    <>
      <MenuButton />
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: utility.background,
              color: utility.text,
            }}
            className="min-w-fit flex flex-col justify-center items-end absolute top-0 right-0 bottom-0 z-10 transition-colors duration-700 text-2xl gap-6 p-10 shadow-2xl links"
          >
            <QuoteLink />
            <FavoriteLink />
            <div className="bg-white rounded-md p-2 mt-3">
              <Themes size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
