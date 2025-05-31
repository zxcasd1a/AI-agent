// src/components/TinyFooter.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M9.47 3.22a.75.75 0 011.06 0l6 6a.75.75 0 01-1.06 1.06L10 4.81 4.53 10.28a.75.75 0 01-1.06-1.06l6-6z" clipRule="evenodd" />
  </svg>
);

const TinyFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="py-space-m bg-true-white border-t border-light-gray">
        <div className="max-w-[1080px] mx-auto px-space-m sm:px-space-l">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3 text-center sm:text-left">
            <p className="text-[10px] text-muted-steel tracking-[0.1em]">
              &copy;{currentYear} Sougwen Chung
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 text-[10px] text-muted-steel tracking-[0.1em]">
              <Link href="/privacy" className="hover:text-navy transition-colors duration-200">Privacy Policy</Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/site-credits" className="hover:text-navy transition-colors duration-200">Site Credits</Link>
            </div>
          </div>
        </div>
      </footer>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2 bg-navy text-true-white rounded-full shadow-lg hover:bg-cobalt-blue transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default TinyFooter;
