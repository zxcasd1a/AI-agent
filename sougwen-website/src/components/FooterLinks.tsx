// src/components/FooterLinks.tsx
import React from 'react';
import Link from 'next/link';

interface FooterLinkItem {
  href: string;
  text: string;
}

interface FooterLinkGroup {
  id: string;
  heading: string;
  links: FooterLinkItem[];
}

const linkGroups: FooterLinkGroup[] = [
  {
    id: 'group1',
    heading: 'Explore',
    links: [
      { href: '/art-projects', text: 'Art Projects' },
      { href: '/research', text: 'Research' },
      { href: '/exhibitions', text: 'Exhibitions' },
      { href: '/studio', text: 'Studio' },
    ],
  },
  {
    id: 'group2',
    heading: 'Connect',
    links: [
      { href: '/contact', text: 'Contact Us' },
      { href: '/press', text: 'Press Kit' },
      { href: '/newsletter', text: 'Newsletter' },
    ],
  },
  {
    id: 'group3',
    heading: 'Social',
    links: [
      { href: 'https://instagram.com', text: 'Instagram' },
      { href: 'https://twitter.com', text: 'Twitter' },
      { href: 'https://vimeo.com', text: 'Vimeo' },
    ],
  },
  {
    id: 'group4',
    heading: 'Information',
    links: [
      { href: '/about', text: 'About Sougwen' },
      { href: '/faq', text: 'FAQ' },
      { href: '/terms', text: 'Terms of Use' },
      { href: '/privacy', text: 'Privacy Policy' },
    ],
  },
  // Added a fifth group for the 5-column layout possibility
  {
    id: 'group5',
    heading: 'Archive',
    links: [
        { href: '/archive/2023', text: '2023' },
        { href: '/archive/2022', text: '2022' },
        { href: '/archive/2021', text: '2021' },
    ]
  }
];

const FooterLinks: React.FC = () => {
  return (
    <footer className="border-t border-light-gray bg-true-white">
      <div className="max-w-[1080px] mx-auto px-space-m sm:px-space-l py-space-l">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-space-m gap-y-space-l">
          {linkGroups.map((group) => (
            <div key={group.id} className="flex flex-col"> {/* Removed gap-2, using mb on heading and li for spacing */}
              <h3 className="text-xs font-semibold text-navy mb-3"> {/* Adjusted mb to 3 (12px) from 2 (8px) */}
                {group.heading}
              </h3>
              <ul className="space-y-2"> {/* Added space-y-2 for spacing between links */}
                {group.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy/70 hover:text-navy transition-colors duration-200"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
