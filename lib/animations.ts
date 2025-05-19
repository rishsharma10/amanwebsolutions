import { Variants } from 'framer-motion';

// Fade up animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  },
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
};

// Hover animation for cards
export const cardHover = {
  rest: { 
    scale: 1,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    transition: { 
      duration: 0.2, 
      ease: "easeInOut" 
    }
  },
  hover: { 
    scale: 1.03,
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" 
    }
  }
};

// Button hover animation
export const buttonHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2, 
      ease: "easeInOut" 
    }
  }
};

// Scroll triggered animations
export const scrollReveal = {
  hidden: { opacity: 0, y: 75 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Logo animation
export const logoAnimation: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      duration: 1,
      ease: "easeInOut",
      delay: 0.2
    }
  }
};

// Path tracing animation
export const pathTrace: Variants = {
  hidden: { pathLength: 0 },
  visible: { 
    pathLength: 1,
    transition: { 
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

// Text character animation
export const textReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.4,
    },
  },
});

// Parallax effect
export const parallax = (speed: number) => ({
  initial: { y: 0 },
  animate: (y = 0) => ({
    y: y * speed,
    transition: { type: "spring", stiffness: 100, damping: 30 },
  }),
});