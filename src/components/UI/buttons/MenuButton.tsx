import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { MenuSquareIcon, SquareXIcon } from "lucide-react";
import { toggleMenu } from "../../../redux/slices/menuSlice";

export default function MenuButton() {
  const { text } = useAppSelector((state) => state.theme.current);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menu.isOpen);

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      style={{ color: text }}
      className="absolute z-20 right-0 p-5 top-0"
      onClick={() => dispatch(toggleMenu())}
    >
      {isOpen ? <SquareXIcon size={32} /> : <MenuSquareIcon size={32} />}
    </motion.button>
  );
}
