import React from 'react';
import { motion } from 'framer-motion';

interface WaveDividerProps {
  className?: string;
  color?: string;
  flip?: boolean;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ 
  className = '', 
  color = 'fill-white dark:fill-slate-900',
  flip = false 
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <motion.svg
        className={`relative block w-full h-16 sm:h-20 lg:h-24 ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ y: flip ? -100 : 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <path
          d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
          className={color}
        />
      </motion.svg>
    </div>
  );
};

export default WaveDivider;