import React from 'react';
import { QuizState } from '../types/quiz';

interface HeaderProps {
  quizState: QuizState;
  answeredCount: number;
  totalQuestions: number;
  onStartQuiz: () => void;
  onRequestSubmit: () => void;
  onResetQuiz: () => void;
  onGoToOverview: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  quizState,
  answeredCount,
  totalQuestions,
  onStartQuiz,
  onRequestSubmit,
  onResetQuiz,
  onGoToOverview,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={onGoToOverview}
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-indigo-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
        >
          UI/UX Mastery Quiz
        </button>

        {/* Zone 2: Clean single-line metadata / nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={onGoToOverview}
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Overview
          </button>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="whitespace-nowrap shrink-0 text-slate-500">
            25 Questions
          </span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="whitespace-nowrap shrink-0 text-slate-500">
            5 Domains
          </span>
          {quizState === 'in_progress' && (
            <>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="whitespace-nowrap shrink-0 font-medium text-indigo-700">
                Answered {answeredCount} of {totalQuestions}
              </span>
            </>
          )}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {quizState === 'welcome' && (
            <button
              onClick={onStartQuiz}
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 whitespace-nowrap shrink-0"
            >
              Start Quiz
            </button>
          )}

          {quizState === 'in_progress' && (
            <button
              onClick={onRequestSubmit}
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 whitespace-nowrap shrink-0"
            >
              Submit Quiz
            </button>
          )}

          {quizState === 'results' && (
            <button
              onClick={onResetQuiz}
              className="px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 whitespace-nowrap shrink-0"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
