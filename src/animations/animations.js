const animations = {
  headerVariant: {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },

  popInVariant: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.6 },
    },
  },
  fadeInVariant: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  slideInVariant: {
    hidden: { opacity: 0, x: -1200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
};

export default animations;
