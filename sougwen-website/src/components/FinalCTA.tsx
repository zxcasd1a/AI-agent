// src/components/FinalCTA.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PlayCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
  </svg>
);

const FinalCTA: React.FC = () => {
  const ctaText = "Why I Draw with Robots";
  const ctaSubtext = "TED Talk";
  const ctaImageUrl = "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&q=75"; // Placeholder square image
  const ctaLinkUrl = "https://www.ted.com/talks/sougwen_chung_why_i_draw_with_robots";

  return (
    <section className="py-space-l bg-light-gray">
      <div className="max-w-[1080px] mx-auto px-space-m sm:px-space-l">
        <Link href={ctaLinkUrl} target="_blank" rel="noopener noreferrer" className="block group bg-true-white p-space-m shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md">
          <div className="flex flex-col md:flex-row items-center gap-space-m">
            {/* Text Left */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl font-display font-extrabold text-navy mb-1 group-hover:text-cobalt-blue transition-colors duration-200">
                {ctaText}
              </h3>
              <p className="text-base lg:text-lg text-muted-steel mb-3 md:mb-0 flex items-center justify-center md:justify-start">
                <PlayCircleIcon className="w-6 h-6 text-cobalt-blue mr-2" />
                {ctaSubtext}
              </p>
            </div>

            {/* Square Image Right */}
            <div className="w-full md:w-auto md:max-w-[200px] lg:max-w-[250px] aspect-square bg-light-gray rounded overflow-hidden">
              {/*
                Adjusted width constraints:
                - md:w-auto to allow natural size up to max-w.
                - md:max-w-[200px] and lg:max-w-[250px] to control image size on larger screens for better balance.
                - Removed w-1/3 lg:w-1/4 to simplify, as max-w will handle it.
              */}
              <div className="relative w-full h-full">
                <Image
                  src={ctaImageUrl}
                  alt={ctaText}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 767px) 80vw, 250px" // Sizes for responsive images
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
