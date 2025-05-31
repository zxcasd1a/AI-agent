// src/components/SectionHeader.tsx
import React from 'react';

interface SectionHeaderProps {
  line1Text: string;
  line1Size?: string;
  line2Text: string;
  line2Size?: string;
  showDecorator?: boolean;
  decoratorChar?: string;
  decoratorColor?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  line1Text,
  line1Size = 'text-[72px]',
  line2Text,
  line2Size = 'text-[48px]',
  showDecorator = false,
  decoratorChar = '×',
  decoratorColor = 'text-cobalt-blue',
  className = '',
}) => {
  return (
    <section className={`py-space-l bg-true-white relative ${className}`}>
      <div className="max-w-[1080px] mx-auto px-space-m sm:px-space-l relative">
        <h2 className="font-display font-extrabold text-navy leading-none tracking-tighter">
          <span className={`block ${line1Size} uppercase`}>
            {line1Text}
          </span>
          <span className={`block ${line2Size} uppercase mt-1`}>
            {line2Text}
          </span>
        </h2>

        {showDecorator && (
          <div
            className={`
              absolute top-0 right-0 h-full flex items-center
              ${decoratorColor} ${line1Size} font-normal /* Using line1Size for decorator */
              transition-transform duration-300 ease-out hover:rotate-180
              select-none /* Prevent text selection of decorator */
            `}
            style={{ lineHeight: '0.8' }} // Adjust line-height to better center the '×' if it's slightly off
          >
            {decoratorChar}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionHeader;
