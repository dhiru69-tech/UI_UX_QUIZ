import React from 'react';
import { UserAnswers } from '../types/quiz';
import { Question } from '../data/questions';

interface QuestionPaletteProps {
  questions: Question[];
  currentIndex: number;
  answers: UserAnswers;
  onSelectQuestion: (index: number) => void;
  onRequestSubmit: () => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  currentIndex,
  answers,
  onSelectQuestion,
  onRequestSubmit,
}) => {
  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const remainingCount = total - answeredCount;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900 tracking-tight">Question Navigator</h3>
        <span className="text-xs text-slate-500 tabular-nums">
          {answeredCount}/{total} Answered
        </span>
      </div>

      {/* Grid of 25 questions */}
      <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
        {questions.map((q, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered = Boolean(answers[q.id]);

          let stateClasses = 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50';

          if (isCurrent && isAnswered) {
            stateClasses = 'bg-indigo-600 text-white border-indigo-600 ring-2 ring-indigo-300 ring-offset-1 font-bold';
          } else if (isCurrent && !isAnswered) {
            stateClasses = 'bg-slate-900 text-white border-slate-900 ring-2 ring-slate-400 ring-offset-1 font-bold';
          } else if (isAnswered) {
            stateClasses = 'bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold hover:bg-indigo-100';
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectQuestion(idx)}
              aria-label={`Question ${q.id}: ${isAnswered ? 'Answered' : 'Unanswered'}${isCurrent ? ' (Current)' : ''}`}
              className={`relative h-10 w-full rounded-lg text-xs transition-all flex items-center justify-center border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 tabular-nums ${stateClasses}`}
            >
              <span>{q.id}</span>
              {isAnswered && !isCurrent && (
                <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-indigo-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-y-1.5">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-indigo-50 border border-indigo-200 inline-block" />
          <span>Answered ({answeredCount})</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-white border border-slate-200 inline-block" />
          <span>Unanswered ({remainingCount})</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-slate-900 border border-slate-900 inline-block" />
          <span>Current</span>
        </div>
      </div>

      {/* Submit Button in Sidebar */}
      <div className="pt-3 border-t border-slate-100">
        <button
          onClick={onRequestSubmit}
          className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <span>Submit Quiz</span>
          <span className="opacity-80 text-[11px] tabular-nums">({answeredCount}/25)</span>
        </button>
      </div>
    </div>
  );
};
