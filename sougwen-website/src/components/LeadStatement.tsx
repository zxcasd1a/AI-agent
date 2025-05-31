// src/components/LeadStatement.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const LeadStatement: React.FC = () => {
  const statement = "Exploring the mark-made-by-hand and the mark-made-by-machine to shape new relational systems.";
  const reducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 16 }, // Start 16px down and faded out
    visible: { opacity: 1, y: 0 },  // End at original position and fully visible
  };

  return (
    <section className="py-space-l bg-true-white">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={!reducedMotion ? variants : undefined}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="text-xl leading-[1.3] text-navy font-normal">
          {statement}
        </p>
      </motion.div>
    </section>
  );
};

export default LeadStatement;
