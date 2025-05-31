// src/components/QuestionButton.tsx
import React from 'react';

interface QuestionButtonProps {
  questionParts: Array<{ text: string; emphasized?: boolean }>;
  onClick?: () => void;
  className?: string;
}

const QuestionButton: React.FC<QuestionButtonProps> = ({ questionParts, onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        block w-full text-left text-navy text-lg md:text-xl lg:text-2xl leading-snug
        hover:text-cobalt-blue focus:outline-none focus:ring-2 focus:ring-cobalt-blue focus:ring-opacity-50
        transition-colors duration-200
        ${className}
      `}
    >
      {questionParts.map((part, index) => (
        <span
          key={index}
          className={`
            ${part.emphasized ? 'text-cobalt-blue font-semibold' : 'font-normal'}
          `}
        >
          {part.text}
        </span>
      ))}
    </button>
  );
};

export default QuestionButton;
