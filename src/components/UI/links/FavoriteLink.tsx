import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { closeMenu } from "../../../redux/slices/menuSlice";

export default function FavoriteLink() {
  const dispatch = useAppDispatch();

  return (
    <NavLink
      data-testid="favorites"
      title="Go to Favorites"
      className={({ isActive }) => (isActive ? "active w-fit" : "")}
      to="/favorites"
      onClick={() => dispatch(closeMenu())}
    >
      Favorites
    </NavLink>
  );
}
