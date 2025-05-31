// src/components/QAPair.tsx
import React, { useState, Fragment } from 'react';
import QuestionButton from './QuestionButton';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';

type QuestionPart = { text: string; emphasized?: boolean };
interface QuestionData {
  id: string;
  parts: QuestionPart[];
  modalContent: string;
  fullQuestion: string;
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
      fullQuestion: 'What does creativity look like now?',
      modalContent: 'This is placeholder content for the question about creativity. Deeper essays or interactive content could go here.',
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
      fullQuestion: 'Where does AI end and We begin?',
      modalContent: 'Placeholder content discussing the boundaries of AI and human agency. This could link to research or philosophical explorations.',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionData | null>(null);

  const handleQuestionClick = (question: QuestionData) => {
    setSelectedQuestion(question);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedQuestion(null), 300);
  };

  return (
    <>
      <section className="py-space-l bg-true-white">
        <div className="max-w-[1080px] mx-auto px-space-m sm:px-space-l">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-l gap-y-space-m">
            {questions.map((q) => (
              <QuestionButton
                key={q.id}
                questionParts={q.parts}
                onClick={() => handleQuestionClick(q)}
                className="p-4 border border-light-gray hover:border-cobalt-blue/50 rounded-md"
              />
            ))}
          </div>
        </div>
      </section>

      {selectedQuestion && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
            </TransitionChild>

            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="max-w-lg w-full space-y-4 bg-true-white p-6 rounded-lg shadow-xl">
                  <DialogTitle className="text-xl font-semibold text-navy">
                    {selectedQuestion.fullQuestion}
                  </DialogTitle>
                  <p className="text-sm text-muted-steel">
                    {selectedQuestion.modalContent}
                  </p>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="mt-4 px-4 py-2 text-sm font-medium text-true-white bg-cobalt-blue hover:bg-navy rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-blue focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default QAPair;
