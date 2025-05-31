// src/components/QAPair.tsx
import React from 'react';
import QuestionButton from './QuestionButton';

type QuestionPart = { text: string; emphasized?: boolean };
interface QuestionData {
  id: string;
  parts: QuestionPart[];
}

const QAPair: React.FC = () => {
  const questions: QuestionData[] = [
    {
      id: 'q1',
      parts: [
        { text: 'What does ' },
        { text: 'creativity', emphasized: true },
        { text: ' look like now?' },
      ],
    },
    {
      id: 'q2',
      parts: [
        { text: 'Where does ' },
        { text: 'AI', emphasized: true },
        { text: ' end and ' },
        { text: 'We', emphasized: true },
        { text: ' begin?' },
      ],
    },
  ];

  const handleQuestionClick = (questionId: string) => {
    console.log(`Question clicked: ${questionId}`);
    // Future: open modal or navigate
  };

  return (
    <section className="py-space-l bg-true-white">
      <div className="max-w-[1080px] mx-auto px-space-m sm:px-space-l">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-l gap-y-space-m">
          {questions.map((q) => (
            <QuestionButton
              key={q.id}
              questionParts={q.parts}
              onClick={() => handleQuestionClick(q.id)}
              className="p-4 border border-light-gray hover:border-cobalt-blue/50 rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QAPair;
