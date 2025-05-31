// src/components/FramedArtwork.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FramedArtworkProps {
  src: string;
  alt: string;
  className?: string;
}

const FramedArtwork: React.FC<FramedArtworkProps> = ({ src, alt, className = '' }) => {
  const reducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`
        group relative p-[4px] bg-navy hover:bg-cobalt-blue
        transition-all duration-300 ease-out
        shadow-none hover:shadow-[10px_20px_30px_-10px_rgba(0,0,0,0.25)]
        ${className}
      `}
      variants={!reducedMotion ? cardVariants : undefined}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Using 0.3 amount for smaller elements
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Inner white border simulation using another div with padding */}
      <div className="bg-true-white p-[1px]">
        <div className="relative aspect-square"> {/* Assuming square artworks */}
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="filter grayscale-[0.1] contrast-[1.05] transition-all duration-300 ease-out group-hover:opacity-90"
            // filter: grayscale(10%) contrast(105%) -> Tailwind classes: grayscale-[.10] contrast-[1.05]
            // Note: Tailwind's default grayscale is 100%. For 10%, we use an arbitrary value.
            // Same for contrast, default is 100%. 105% is contrast-[1.05].
          />
        </div>
      </div>
    </div>
  );
};

export default FramedArtwork;
