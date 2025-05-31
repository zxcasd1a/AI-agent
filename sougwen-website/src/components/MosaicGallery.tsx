// src/components/MosaicGallery.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MosaicItemProps {
  src: string;
  alt: string;
  rowSpan?: number; // How many rows the item should span
  colSpan?: number; // How many columns the item should span (default 1)
}

const MosaicItem: React.FC<MosaicItemProps> = ({ src, alt, rowSpan = 1, colSpan = 1 }) => {
  // Tailwind classes for row and column spans. Max 4 rows/cols as per spec for this gallery.
  const rowSpanClass =
    rowSpan === 2 ? 'row-span-2' :
    rowSpan === 3 ? 'row-span-3' :
    rowSpan === 4 ? 'row-span-4' : 'row-span-1';
  const colSpanClass =
    colSpan === 2 ? 'col-span-2' :
    colSpan === 3 ? 'col-span-3' :
    colSpan === 4 ? 'col-span-4' : 'col-span-1';

  return (
    <div
      className={`relative ${rowSpanClass} ${colSpanClass} group cursor-pointer`}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-300 group-hover:opacity-80"
        sizes="(max-width: 768px) 100vw, (max-width: 1080px) 50vw, 25vw" // Basic responsive sizes
      />
    </div>
  );
};

const MosaicGallery: React.FC = () => {
  const items: MosaicItemProps[] = [
    // Row 1
    { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=280&h=280&fit=crop&q=75", alt: "Mosaic gallery image 1", rowSpan: 1, colSpan: 1 },
    { src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=280&h=560&fit=crop&q=75", alt: "Mosaic gallery image 2", rowSpan: 2, colSpan: 1 },
    { src: "https://images.unsplash.com/photo-1583511655826-05700d52fd4d?w=280&h=280&fit=crop&q=75", alt: "Mosaic gallery image 3", rowSpan: 1, colSpan: 1 },
    { src: "https://images.unsplash.com/photo-1516298252-369591615B08?w=280&h=280&fit=crop&q=75", alt: "Mosaic gallery image 4", rowSpan: 1, colSpan: 1 },
    // Row 2 (item 2 continues here)
    { src: "https://images.unsplash.com/photo-1530041539828-114de669390e?w=280&h=280&fit=crop&q=75", alt: "Mosaic gallery image 5", rowSpan: 1, colSpan: 1 },
    { src: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=280&h=560&fit=crop&q=75", alt: "Mosaic gallery image 6", rowSpan: 2, colSpan: 1 },
    // Row 3
    { src: "https://images.unsplash.com/photo-1598133894022-56ddc6000517?w=560&h=280&fit=crop&q=75", alt: "Mosaic gallery image 7", rowSpan: 1, colSpan: 2 },
    // (item 6 continues here)
    // Row 4
    { src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=280&h=280&fit=crop&q=75", alt: "Mosaic gallery image 8", rowSpan: 1, colSpan: 1 },
    { src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=280&h=280&fit=crop&q=75", alt: "Mosaic gallery image 9", rowSpan: 1, colSpan: 1 },
    { src: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=280&h=280&fit=crop&q=75", alt: "Mosaic gallery image 10", rowSpan: 1, colSpan: 1 },
    { src: "https://images.unsplash.com/photo-1537151608828-3af2b7369865?w=280&h=280&fit=crop&q=75", alt: "Mosaic gallery image 11", rowSpan: 1, colSpan: 1 },
    { src: "https://images.unsplash.com/photo-1575853938048-496a708065e7?w=560&h=280&fit=crop&q=75", alt: "Mosaic gallery image 12", rowSpan: 1, colSpan: 2 },
  ];
  // Total cells from example: 1*1 + 2*1 + 1*1 + 1*1 + 1*1 + 2*1 + 1*2 + 1*1 + 1*1 + 1*1 + 1*1 + 1*2 = 1+2+1+1+1+2+2+1+1+1+1+2 = 16 cells.
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
        <div
          className="grid grid-cols-4 gap-space-s" // 4 columns, gap:8px (space-s)
          style={{ gridAutoRows: '140px' }} // grid-auto-rows: 140px
        >
          {items.map((item, index) => (
            <MosaicItem
              key={index}
              src={item.src}
              alt={item.alt}
              rowSpan={item.rowSpan}
              colSpan={item.colSpan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MosaicGallery;
