"use client"
import { motion, Variants, HTMLMotionProps } from "framer-motion";

const WavyText = ({
  text,
  delay = 0,
  duration = 0.05,
  replay,
  ...props
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
    }
  };

  return (
    <motion.span
      className="flex flex-wrap overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} viewport={{ once: true }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default WavyText;
