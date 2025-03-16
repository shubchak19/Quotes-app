import { BookmarkIcon, HistoryIcon, ImageIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Quote", path: "/", icon: <ImageIcon /> },
  { name: "Favorites", path: "/favorites", icon: <BookmarkIcon /> },
  { name: "History", path: "/history", icon: <HistoryIcon /> },
];

function NavLinks({ textOnly }: { textOnly?: boolean }) {

  return (
    <ul
      className={`flex flex-col ${
        textOnly ? "items-end" : "items-center"
      } gap-4`}
    >
      {links.map((link) => {
        return (
          <li key={link.name}>
            <NavLink
              data-title={textOnly ? null : link.name}
              className={`${({ isActive }: { isActive: boolean }) =>
                isActive && "active"} p-2 flex`}
              to={link.path}
            >
              {textOnly ? link.name : link.icon}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
