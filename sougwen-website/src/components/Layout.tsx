// src/components/Layout.tsx
import React from 'react';
import Header from './Header'; // Import Header

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-true-white text-navy">
      <Header /> {/* Add Header here */}
      {/* Max width for the entire canvas (though Header is full-width within this, content below is constrained) */}
      <div className="max-w-[1440px] mx-auto">
        {/* Centered content column */}
        <main className="max-w-[1080px] mx-auto px-space-m sm:px-space-l">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
