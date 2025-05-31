// src/components/NarrativeParagraph.tsx
import React from 'react';
import Link from 'next/link';

interface NarrativeParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const NarrativeParagraph: React.FC<NarrativeParagraphProps> = ({ children, className = '' }) => {
  return (
    <section className={`py-space-l bg-true-white ${className}`}>
      <div className="max-w-[600px] mx-auto text-center">
        <p className="text-[13px] leading-[1.6] text-navy">
          {children}
        </p>
      </div>
    </section>
  );
};

export const NarrativeLink: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ href, children, className = '' }) => {
  return (
    <Link
      href={href}
      className={`text-cobalt-blue hover:border-b hover:border-cobalt-blue pb-[1px] ${className}`}
    >
      {children}
    </Link>
  );
};

export default NarrativeParagraph;
