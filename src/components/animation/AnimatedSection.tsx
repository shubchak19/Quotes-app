import { motion } from "motion/react";
import { fade } from "./variants";

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fade}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
