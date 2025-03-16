export const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  transition:{duration: 0.3},
  exit: {
    opacity: 0,
  },
};

export const item = {
  hidden: { y: 100, opacity: 0 },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: index * 0.05,
    },
  }),
  exit: {
    x: -100,
    opacity: 0,
  },
};
