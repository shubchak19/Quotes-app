import { MenuSquareIcon, SquareXIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import NavLinks from "./NavLinks";

function PhoneMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <button
        className={`absolute z-50 right-0 p-4 top-0 `}
        onClick={() => toggleMenu()}
      >
        {isMenuOpen ? <SquareXIcon size={32} /> : <MenuSquareIcon size={32} />}
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2 }}
            className="min-w-fit h-screen flex flex-col justify-center items-end absolute top-0 right-0 bottom-0 bg-gray-700 text-xl gap-2 p-10 font-medium mobile-links shadow-2xl shadow-black z-30"
          >
            <NavLinks textOnly />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PhoneMenu;
