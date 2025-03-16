import AnimatedSection from "@/components/animation/AnimatedSection";
import { item } from "@/components/animation/variants";
import { AnimatePresence, motion } from "motion/react";
import { Children } from "react";

type GridLayoutProps = {
  children: React.ReactNode;
  heading: string;
  clearAll: () => void;
};

function GridLayout({
  children,
  heading = "Heading",
  clearAll = () => {},
}: GridLayoutProps) {
  return (
    <AnimatedSection className="w-full h-full pt-15 sm:pb-15 sm:pl-16 sm:pt-0">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-black font-bold sm:text-xl">
          {heading}
        </h2>
        <button
          className="text-gray-900 px-3 underline underline-offset-4 text-sm sm:text-md"
          onClick={clearAll}
        >
          Clear all
        </button>
      </div>
      <ul className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 overflow-x-hidden overflow-y-scroll p-4 pt-0 place-content-start">
        <AnimatePresence mode="popLayout">
          {Children.map(children, (child, index) => {
            return (
              <motion.li
                layout={true}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={item}
                custom={index}
              >
                {child}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </AnimatedSection>
  );
}

export default GridLayout;
