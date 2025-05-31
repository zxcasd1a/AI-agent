// src/components/Header.tsx
import React from 'react';
import Link from 'next/link'; // For navigation items

const Header: React.FC = () => {
  const menuItems = [
    { name: 'ART PROJECTS', path: '/art-projects' },
    { name: 'RESEARCH', path: '/research' },
    { name: 'PRESS', path: '/press' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="w-full bg-true-white py-space-m">
      <div className="max-w-[1080px] mx-auto flex justify-between items-center px-space-m sm:px-space-l">
        {/* Brand Word-mark */}
        <Link href="/" className="text-navy font-semibold text-[14px] uppercase tracking-wider" style={{ fontVariantCaps: 'small-caps' }}>
          Sougwen Chung
        </Link>

        {/* Menu Items */}
        <nav>
          <ul className="flex items-center text-xs tracking-widest font-semibold uppercase">
            {menuItems.map((item, index) => (
              <li key={item.name}>
                <Link href={item.path} className="text-navy hover:text-cobalt-blue">
                  {item.name}
                </Link>
                {index < menuItems.length - 1 && <span className="text-navy mx-2">/</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
