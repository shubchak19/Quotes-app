import { motion, MotionProps } from "framer-motion";
import { CssColorType } from "../../../types";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "ref" | "children"
> &
  MotionProps;

interface PropType extends ButtonProps {
  variant?: "round";
  size?: number;
  color?: CssColorType;
  customclass?: string;
}

export default function Button(props: PropType) {
  const { children, variant, size, color, customclass, ...rest } = props;

  function getTypeClass() {
    switch (variant) {
      case "round":
        return "p-1 rounded-full flex justify-center items-center";
      default:
        return "w-full sm:w-fit py-2 px-6 h-fit rounded text-white transition-colors duration-1000";
    }
  }

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={`font-bold text-nowrap select-none 
      ${getTypeClass()} ${customclass}`}
      style={{
        height: size,
        width: size,
        backgroundColor: color,
      }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
