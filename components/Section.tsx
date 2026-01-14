import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, noPadding = false }) => {
  return (
    <section id={id} className={`relative w-full ${noPadding ? '' : 'py-24 md:py-36'} ${className}`}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
};

export const Reveal: React.FC<{ children: ReactNode; delay?: number; direction?: 'up' | 'left' | 'right' }> = ({ children, delay = 0, direction = 'up' }) => {
  const initial = direction === 'up' ? { opacity: 0, y: 50 } : direction === 'left' ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 };
  const animate = direction === 'up' ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }} // Elegant cubic bezier
    >
      {children}
    </motion.div>
  );
};