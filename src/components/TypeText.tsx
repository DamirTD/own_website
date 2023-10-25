import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TypingTextProps {
  text: string;
  as: string;
  position: string;
  _after: {
    content: string;
    width: string;
    height: string;
    position: string;
    bottom: number;
    left: number;
    bg: string;
    zIndex: number;
  };
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');
  const controls = useAnimation();
  const reverseControls = useAnimation();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const animateText = async () => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        for (let i = 0; i <= text.length; i++) {
          setVisibleText(text.slice(0, i));
          await controls.start({ opacity: 1, display: 'block' });
          await controls.start({ opacity: 0, display: 'none' });
          await new Promise((resolve) => setTimeout(resolve, 150)); // Typing speed
        }

        for (let i = text.length; i >= 0; i--) {
          setVisibleText(text.slice(0, i));
          await reverseControls.start({ opacity: 1, display: 'block' });
          await reverseControls.start({ opacity: 0, display: 'none' });
          await new Promise((resolve) => setTimeout(resolve, 150)); // Erasing speed
        }
      }
    };

    animateText();

    return () => {
      clearInterval(interval);
    };
  }, [controls, reverseControls, text]);

  return (
    <motion.div>
      {visibleText}
    </motion.div>
  );
};

export default TypingText;
