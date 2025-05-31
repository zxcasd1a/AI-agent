// src/components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  imageUrl: string;
  caption: string;
  linkUrl: string;
}

// Simple Right Arrow SVG
const RightArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, caption, linkUrl }) => {
  return (
    <Link href={linkUrl} className="block group w-full">
      <div className="relative w-full aspect-[4/3] bg-light-gray overflow-hidden">
        <Image
          src={imageUrl}
          alt={caption}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-out group-hover:scale-105"
          sizes="(max-width: 767px) 80vw, (max-width: 1023px) 60vw, 33vw" // Adjusted sizes
        />
      </div>
      <div className="mt-3 flex items-center"> {/* Corresponds to space-xs (Tailwind default 0.75rem=12px) or space-s (8px from our theme) - using mt-3 (12px) for now */}
        <p
          className="text-navy text-[11px] uppercase tracking-[0.08em] font-semibold leading-none"
        >
          {caption}
        </p>
        <RightArrowIcon className="w-5 h-5 text-navy ml-2 transform -translate-y-px transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default ProjectCard;
