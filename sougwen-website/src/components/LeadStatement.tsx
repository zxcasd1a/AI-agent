// src/components/LeadStatement.tsx
import React from 'react';

const LeadStatement: React.FC = () => {
  const statement = "Exploring the mark-made-by-hand and the mark-made-by-machine to shape new relational systems.";

  return (
    <section className="py-space-l bg-true-white"> {/* py-space-l (64px padding top/bottom) */}
      <div className="max-w-2xl mx-auto text-center"> {/* max-w-2xl (672px), centered */}
        <p className="text-xl leading-[1.3] text-navy font-normal"> {/* text-xl (20px), line-height 130%, navy color, normal weight */}
          {statement}
        </p>
      </div>
    </section>
  );
};

export default LeadStatement;
