// src/components/HeadingStack.tsx
import React from 'react';

interface HeadingStackProps {
  line1: string;
  line2: string;
  showDiagram?: boolean;
  className?: string;
}

// Placeholder for the spider-web diagram SVG
const SpiderWebDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      className={`w-[260px] h-[260px] ${className}`}
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle/frame for reference */}
      {/* <rect width="260" height="260" stroke="transparent" /> */}

      {/* Radial lines and circles */}
      <line x1="130" y1="0" x2="130" y2="260" stroke="#98A4B5" strokeWidth="1" />
      <line x1="0" y1="130" x2="260" y2="130" stroke="#98A4B5" strokeWidth="1" />
      <line x1="45.11" y1="45.11" x2="214.89" y2="214.89" stroke="#98A4B5" strokeWidth="1" /> {/* Adjusted for better symmetry if circles are centered */}
      <line x1="45.11" y1="214.89" x2="214.89" y2="45.11" stroke="#98A4B5" strokeWidth="1" />

      <line x1="76.7" y1="15.3" x2="183.3" y2="244.7" stroke="#98A4B5" strokeWidth="1" /> {/* More radial lines */}
      <line x1="15.3" y1="76.7" x2="244.7" y2="183.3" stroke="#98A4B5" strokeWidth="1" />
      <line x1="15.3" y1="183.3" x2="244.7" y2="76.7" stroke="#98A4B5" strokeWidth="1" />
      <line x1="76.7" y1="244.7" x2="183.3" y2="15.3" stroke="#98A4B5" strokeWidth="1" />

      <circle cx="130" cy="130" r="50" stroke="#98A4B5" strokeWidth="1" fill="none"/>
      <circle cx="130" cy="130" r="90" stroke="#98A4B5" strokeWidth="1" fill="none"/>
      <circle cx="130" cy="130" r="129" stroke="#98A4B5" strokeWidth="1" fill="none"/>

      {/* Central "×" like element */}
      <line x1="125" y1="125" x2="135" y2="135" stroke="#233B90" strokeWidth="2" />
      <line x1="125" y1="135" x2="135" y2="125" stroke="#233B90" strokeWidth="2" />
    </svg>
  );
};

const HeadingStack: React.FC<HeadingStackProps> = ({
  line1,
  line2,
  showDiagram = false,
  className = '',
}) => {
  return (
    <section className={`py-space-l bg-true-white relative ${className}`}>
      <div className="max-w-[1080px] mx-auto px-space-m sm:px-space-l">
        <div className="relative"> {/* Container for text and diagram */}
          <h2 className="font-display font-extrabold text-navy leading-none tracking-tight relative">
            <span className="block text-[64px] uppercase">
              {line1}
            </span>
            <span className="block text-[64px] uppercase mt-1">
              {line2}
            </span>
          </h2>
          {showDiagram && (
            <div className="absolute top-0 right-0 md:right-auto md:left-1/2 md:-translate-x-1/4 lg:left-auto lg:right-0 mt-0 md:mt-[-60px] lg:mt-0 z-0">
              <SpiderWebDiagram />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeadingStack;
