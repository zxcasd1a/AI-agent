// src/components/ArticleTile.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleTileProps {
  imageUrl: string;
  imageAspect?: 'square' | '4/5';
  headline: string;
  metaLine: string;
  linkUrl: string;
}

const ArticleTile: React.FC<ArticleTileProps> = ({
  imageUrl,
  imageAspect = '4/5', // Default aspect ratio
  headline,
  metaLine,
  linkUrl,
}) => {
  const aspectRatioClass = imageAspect === 'square' ? 'aspect-square' : 'aspect-[4/5]';

  return (
    <Link href={linkUrl} className="block group">
      <div className={`relative w-full ${aspectRatioClass} bg-light-gray overflow-hidden mb-3`}>
        <Image
          src={imageUrl}
          alt={headline}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-out group-hover:scale-105"
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw" // Basic responsive sizes
        />
      </div>
      <div>
        <h3
          className="text-sm font-semibold text-navy mb-1 group-hover:underline"
        >
          {headline}
        </h3>
        <p className="text-[11px] uppercase text-muted-steel tracking-wider">
          {metaLine}
        </p>
      </div>
    </Link>
  );
};

export default ArticleTile;
