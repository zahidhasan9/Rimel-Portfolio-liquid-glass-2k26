import type { Transition, Variants } from "framer-motion";

export const listVariants: Variants = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.985
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
      mass: 0.7
    }
  }
};

export const microSpring: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 28,
  mass: 0.5
};