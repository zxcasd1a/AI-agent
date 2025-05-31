// src/components/ArticleTileGrid.tsx
import React from 'react';
import ArticleTile from './ArticleTile';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const articles = [
  {
    id: 'article1',
    imageUrl: 'https://images.unsplash.com/photo-1611162616805-6790496379f7?w=400&h=500&fit=crop&q=75',
    imageAspect: '4/5',
    headline: 'Where does AI end and We begin?',
    metaLine: 'THOUGHTS · APR 2024',
    linkUrl: '/articles/ai-and-we',
  },
  {
    id: 'article2',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=500&fit=crop&q=75',
    imageAspect: '4/5',
    headline: 'MEMORY (D.O.U.G 2) collected by the V&A',
    metaLine: 'EXHIBITIONS · JAN 2024',
    linkUrl: '/articles/memory-doug2-va',
  },
  {
    id: 'article3',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop&q=75',
    imageAspect: 'square',
    headline: 'WAVE film feat on NOWNESS',
    metaLine: 'FILM · NOV 2023',
    linkUrl: '/articles/wave-film-nowness',
  },
];

const ArticleTileGrid: React.FC = () => {
  const reducedMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-space-l bg-true-white">
      <motion.div
        className="max-w-[1080px] mx-auto px-space-m sm:px-space-l"
        variants={!reducedMotion ? sectionVariants : undefined}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-space-m gap-y-space-l">
          {articles.map((article) => (
            <ArticleTile
              key={article.id}
              imageUrl={article.imageUrl}
              imageAspect={article.imageAspect as 'square' | '4/5'} // Added type assertion
              headline={article.headline}
              metaLine={article.metaLine}
              linkUrl={article.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleTileGrid;
