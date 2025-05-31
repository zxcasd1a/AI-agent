// src/components/ThumbnailStrip.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ThumbnailProps {
  src: string;
  alt: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt }) => {
  return (
    <div className="relative w-[128px] h-[128px] group cursor-pointer"> {/* Fixed size, group for hover effects */}
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-110 transform group-hover:-translate-y-1"
      />
    </div>
  );
};

const ThumbnailStrip: React.FC = () => {
  // Placeholder images (square aspect ratio)
  const thumbnails = [
    { id: 1, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=128&h=128&fit=crop&q=75", alt: "Micro-gallery thumbnail 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1581091226809-990081999693?w=128&h=128&fit=crop&q=75", alt: "Micro-gallery thumbnail 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&fit=crop&q=75", alt: "Micro-gallery thumbnail 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=128&h=128&fit=crop&q=75", alt: "Micro-gallery thumbnail 4" },
    { id: 5, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&q=75", alt: "Micro-gallery thumbnail 5" },
    { id: 6, src: "https://images.unsplash.com/photo-1589386425728-052dec59dd80?w=128&h=128&fit=crop&q=75", alt: "Micro-gallery thumbnail 6" },
  ]; // Added &q=75 for potentially faster loads of small thumbs

  const reducedMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-space-l bg-true-white">
      <motion.div
        className="max-w-[1080px] mx-auto px-space-m sm:px-space-l"
        variants={!reducedMotion ? sectionVariants : undefined}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="grid grid-flow-col auto-cols-max gap-space-s overflow-x-auto pb-4">
          {thumbnails.map((thumb) => (
            <Thumbnail key={thumb.id} src={thumb.src} alt={thumb.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThumbnailStrip;
