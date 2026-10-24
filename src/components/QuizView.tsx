import React, { useState } from 'react';
import { Question, OptionKey } from '../data/questions';
import { UserAnswers } from '../types/quiz';
import { QuizQuestionCard } from './QuizQuestionCard';
import { QuestionPalette } from './QuestionPalette';

interface QuizViewProps {
  questions: Question[];
  answers: UserAnswers;
  onAnswerChange: (questionId: number, optionKey?: OptionKey) => void;
  onRequestSubmit: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  questions,
  answers,
  onAnswerChange,
  onRequestSubmit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercentage = Math.round((answeredCount / totalQuestions) * 100);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentQuestion.id];

  const handleSelectOption = (optionKey: OptionKey) => {
    onAnswerChange(currentQuestion.id, optionKey);
  };

  const handleClearOption = () => {
    onAnswerChange(currentQuestion.id, undefined);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onRequestSubmit();
    }
  };

  const handleJumpToQuestion = (index: number) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Overall Progress Strip */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-medium text-slate-700 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Quiz Progress</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="tabular-nums">
              {answeredCount} of {totalQuestions} answered ({progressPercentage}%)
            </span>
          </div>

          <div className="text-xs text-slate-500 tabular-nums">
            {totalQuestions - answeredCount} remaining
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Main Content Area: Split 2-column on desktop (Question Card + Sidebar Palette) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Question Area (8 columns on lg) */}
        <div className="lg:col-span-8">
          <QuizQuestionCard
            question={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
            selectedOption={currentAnswer}
            onSelectOption={handleSelectOption}
            onClearOption={handleClearOption}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onRequestSubmit={onRequestSubmit}
          />
        </div>

        {/* Sidebar Palette (4 columns on lg) */}
        <div className="lg:col-span-4 sticky top-24">
          <QuestionPalette
            questions={questions}
            currentIndex={currentIndex}
            answers={answers}
            onSelectQuestion={handleJumpToQuestion}
            onRequestSubmit={onRequestSubmit}
          />
        </div>
      </div>
    </div>
  );
};
