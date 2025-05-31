// src/components/HeroSplit.tsx
import React from 'react';
import Image from 'next/image';

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

interface HeroSplitProps {
  imageUrl: string;
  altText: string;
  objectPosition?: string;
  isSticky?: boolean;
  showScrollCue?: boolean;
  height?: string; // e.g., '75vh', '50vh'
  className?: string; // Allow passing additional classes
}

const HeroSplit: React.FC<HeroSplitProps> = ({
  imageUrl,
  altText,
  objectPosition = 'center center',
  isSticky = false,
  showScrollCue = false,
  height = '75vh',
  className = '',
}) => {
  const sectionClasses = `
    relative w-full bg-light-gray
    ${isSticky ? 'sticky top-0 z-0' : 'z-10'}
    ${className}
  `;

  const handleScrollCueClick = () => {
    const heroElement = document.getElementById(altText); // Use altText as a makeshift ID
    if (heroElement) {
        // Attempt to scroll by the height of this specific hero instance
        window.scrollTo({ top: heroElement.offsetTop + heroElement.offsetHeight, behavior: 'smooth' });
    } else {
        // Fallback: scroll by a percentage of viewport height related to the hero's intended height
        const vhHeight = parseFloat(height.replace('vh', ''));
        if (!isNaN(vhHeight)) {
            window.scrollTo({ top: window.innerHeight * (vhHeight / 100), behavior: 'smooth' });
        } else {
            // Absolute fallback if height is not in vh (e.g. px, rem) - scroll one viewport height
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }
    }
  };

  return (
    <section id={altText} className={sectionClasses.trim()} style={{ height }}>
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt={altText}
          layout="fill"
          objectFit="cover"
          objectPosition={objectPosition}
          className="opacity-90" // Default opacity
          priority={isSticky || showScrollCue} // Prioritize loading for initial/sticky hero images
        />
      </div>

      {showScrollCue && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center z-20"> {/* z-20 to be above image */}
          <button
            aria-label="Scroll down"
            className="p-2 text-navy opacity-100 hover:opacity-60 transition-opacity duration-300"
            onClick={handleScrollCueClick}
          >
            <ChevronDownIcon className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroSplit;
