// src/components/Quote.tsx
import React from 'react';

interface QuoteProps {
  children: React.ReactNode; // To pass the quote text
  className?: string; // For additional styling like margins
}

const Quote: React.FC<QuoteProps> = ({ children, className = '' }) => {
  return (
    <section className={`py-space-m bg-true-white ${className}`}> {/* Default padding, can be overridden by className */}
      <div className="max-w-xl mx-auto text-center"> {/* max-w-xl is 36rem/576px */}
        <q className="text-sm italic text-navy"> {/* 14px, italic, navy */}
          {children}
        </q>
      </div>
    </section>
  );
};

export default Quote;
