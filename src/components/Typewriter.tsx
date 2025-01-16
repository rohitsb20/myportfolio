import React from "react";
import { motion } from "framer-motion";

const Typewriter = ({ text }) => {
  const letters = text.split("");

  return (
    <div style={{ display: "flex" }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.1,
            duration: 0.1,
            ease: "ease-in-out",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>
        <Typewriter text="Rohit" />
      </h1>
    </div>
  );
};

export default App;
