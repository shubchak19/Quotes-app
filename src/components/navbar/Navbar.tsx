import { useAppSelector } from "@/redux/hooks";
import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavUtilityButtons from "./NavUtilityButtons";
import PhoneMenu from "./PhoneMenu";

function NavBar() {
  const location = useLocation();
  const rootPath = location.pathname === "/";
  const error = useAppSelector((state) => state.quote.error);

  return (
    <>
      {/* Horizontal navBar */}
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: "0" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`z-10 w-full flex justify-between items-center absolute p-2 sm:hidden
          ${rootPath && !error ? "bg-transparent" : "bg-slate-800"}`}
      >
        <Logo name={"Quotes App"} />
        <PhoneMenu />
      </motion.nav>

      {/* Vertical navBar */}
      <motion.nav
        initial={{ x: "-100%" }}
        animate={{ x: "0" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`z-20 w-fit h-full bg-slate-800 absolute px-2 py-3 sm:flex sm:flex-col hidden`}
      >
        <Logo />
        <div className={`flex-1 mt-12 links`}>
          <NavLinks />
        </div>
        <AnimatePresence mode="wait">
          {rootPath && <NavUtilityButtons />}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default NavBar;
