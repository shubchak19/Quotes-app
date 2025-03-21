import { AnimatePresence } from "motion/react";
import { cloneElement } from "react";
import { useLocation, useOutlet } from "react-router-dom";

export default function AnimatedOutlet() {
  const location = useLocation();
  const element = useOutlet();
  return (
    <AnimatePresence mode="wait">
      {element && cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
