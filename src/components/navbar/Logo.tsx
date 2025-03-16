import { QuoteIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

function Logo({ name = "" }) {
  return (
    <NavLink to="/" className="flex items-center justify-center p-2" title="Quotes App">
      <QuoteIcon
        size={28}
        stroke="transparent"
        fill="white"
        className={`-scale-x-100 rounded-full p-1
            ${name? "mr-2": ""}  border-white border-2`}
      />
      {name}
    </NavLink>
  );
}

export default Logo;