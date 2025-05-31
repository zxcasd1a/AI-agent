// src/components/ThumbnailStrip.tsx
import React from 'react';
import Image from 'next/image';

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
    { id: 1, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=128&h=128&fit=crop&q=75", alt: "Thumbnail 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1581091226809-990081999693?w=128&h=128&fit=crop&q=75", alt: "Thumbnail 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&fit=crop&q=75", alt: "Thumbnail 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=128&h=128&fit=crop&q=75", alt: "Thumbnail 4" },
    { id: 5, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&q=75", alt: "Thumbnail 5" },
    { id: 6, src: "https://images.unsplash.com/photo-1589386425728-052dec59dd80?w=128&h=128&fit=crop&q=75", alt: "Thumbnail 6" },
  ]; // Added &q=75 for potentially faster loads of small thumbs

  return (
    <section className="py-space-l bg-true-white"> {/* Section padding */}
      <div className="max-w-[1080px] mx-auto px-space-m sm:px-space-l"> {/* Aligns with content column */}
        <div className="grid grid-flow-col auto-cols-max gap-space-s overflow-x-auto pb-4"> {/* Horizontal scrollable grid */}
          {thumbnails.map((thumb) => (
            <Thumbnail key={thumb.id} src={thumb.src} alt={thumb.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThumbnailStrip;
