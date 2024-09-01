import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { closeMenu } from "../../../redux/slices/menuSlice";

export default function QuoteLink() {
  const dispatch = useAppDispatch();

  return (
    <NavLink
      data-testid="quotes"
      title="Go to Random Quote"
      className={({ isActive }) => (isActive ? "active w-fit" : "")}
      to="/"
      onClick={() => dispatch(closeMenu())}
    >
      Quotes
    </NavLink>
  );
}
