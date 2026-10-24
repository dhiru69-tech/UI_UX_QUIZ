import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import { Question, OptionKey } from '../data/questions';

interface QuizQuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption?: OptionKey;
  onSelectOption: (optionKey: OptionKey) => void;
  onClearOption: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onRequestSubmit: () => void;
}

export const QuizQuestionCard: React.FC<QuizQuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onClearOption,
  onPrevious,
  onNext,
  onRequestSubmit,
}) => {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalQuestions - 1;

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input or modal is active
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      const key = e.key.toUpperCase();
      if (key === 'A' || key === '1') {
        onSelectOption('A');
      } else if (key === 'B' || key === '2') {
        onSelectOption('B');
      } else if (key === 'C' || key === '3') {
        onSelectOption('C');
      } else if (key === 'D' || key === '4') {
        onSelectOption('D');
      } else if (e.key === 'ArrowLeft' && !isFirst) {
        onPrevious();
      } else if (e.key === 'ArrowRight' && !isLast) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isFirst, isLast, onSelectOption, onPrevious, onNext]);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Question Header & Category */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-indigo-700">Question {currentIndex + 1} of {totalQuestions}</span>
            <span aria-hidden="true">·</span>
            <span>{question.category}</span>
          </div>

          {selectedOption ? (
            <button
              onClick={onClearOption}
              className="text-slate-400 hover:text-slate-600 transition-colors inline-flex items-center gap-1 text-xs cursor-pointer focus-visible:outline-none focus-visible:underline"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear answer</span>
            </button>
          ) : (
            <span className="text-slate-400 text-xs italic">Not answered yet</span>
          )}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
          {question.question}
        </h2>
      </div>

      {/* Options List A - D */}
      <div className="space-y-3 pt-2" role="radiogroup" aria-label={`Options for Question ${currentIndex + 1}`}>
        {question.options.map((option) => {
          const isSelected = selectedOption === option.key;

          return (
            <button
              key={option.key}
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectOption(option.key)}
              className={`w-full text-left p-4 sm:p-4.5 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-50/70 text-slate-900 shadow-xs ring-1 ring-indigo-600'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60 text-slate-700'
              }`}
            >
              <span
                className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors tabular-nums ${
                  isSelected
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {option.key}
              </span>

              <span className="text-sm sm:text-base leading-relaxed flex-1 pt-0.5">
                {option.text}
              </span>

              {isSelected && (
                <span className="shrink-0 text-indigo-600 pt-1" aria-hidden="true">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="text-[12px] text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
        <span>Tip: Press keys <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 border border-slate-200 rounded">A</kbd>–<kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 border border-slate-200 rounded">D</kbd> or <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 border border-slate-200 rounded">1</kbd>–<kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 border border-slate-200 rounded">4</kbd> to select</span>
        <span><kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 border border-slate-200 rounded">←</kbd> <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 border border-slate-200 rounded">→</kbd> to navigate</span>
      </div>

      {/* Navigation Buttons: Previous / Next / Submit */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
            isFirst
              ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-50 border border-slate-200'
              : 'text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <div className="flex items-center gap-2">
          {isLast ? (
            <button
              onClick={onRequestSubmit}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
            >
              <span>Submit Quiz</span>
            </button>
          ) : (
            <button
              onClick={onNext}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
            >
              <span>Next Question</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
