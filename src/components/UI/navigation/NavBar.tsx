import { useAppSelector } from "../../../redux/hooks";
import { QuoteIcon } from "lucide-react";
import Themes from "../components/Themes";
import QuoteLink from "../links/QuoteLink";
import FavoriteLink from "../links/FavoriteLink";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const { text, utility } = useAppSelector((state) => state.theme.current);

  return (
    <nav
      className={`z-10 w-full flex justify-between items-center font-medium transition-colors duration-1000 h-fit`}
      style={{ color: utility.text }}
    >
      <NavLink to="/" className="flex items-center" title="Quotes App">
        <QuoteIcon
          size={32}
          fill={text}
          stroke="transparent"
          className="-scale-x-100 transition-colors rounded-full duration-1000 p-2 mr-2"
          style={{ backgroundColor: utility.background }}
        />
        Quotes App
      </NavLink>
      <div className={`lg:flex gap-4 px-2 py-1 items-center hidden links`}>
        <QuoteLink />
        <FavoriteLink />
      </div>
      <div className="hidden lg:block">
        <Themes />
      </div>
      <div className="lg:hidden">
        <Menu />
      </div>
    </nav>
  );
}
