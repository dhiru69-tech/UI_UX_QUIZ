import React from 'react';
import { RotateCcw, CheckCircle2, XCircle, HelpCircle, ArrowDown } from 'lucide-react';
import { Question } from '../data/questions';
import { QuizResult, UserAnswers } from '../types/quiz';
import { ScoreGauge } from './ScoreGauge';
import { AnswerReview } from './AnswerReview';

interface ResultsViewProps {
  result: QuizResult;
  questions: Question[];
  answers: UserAnswers;
  onResetQuiz: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  result,
  questions,
  answers,
  onResetQuiz,
}) => {
  const scrollToReview = () => {
    const el = document.getElementById('detailed-review-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 lg:py-12 space-y-10">
      {/* Top Banner / Performance Announcement */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
          Assessment Complete
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Your Quiz Results
        </h1>
        <p className="text-base sm:text-lg text-slate-700 font-medium bg-slate-100/70 py-2.5 px-4 rounded-xl inline-block border border-slate-200">
          {result.performanceMessage}
        </p>
      </div>

      {/* Main Scorecard Split: Gauge & Breakdown Stats */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Circular SVG Score Gauge */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-4">
          <ScoreGauge
            score={result.score}
            total={result.totalQuestions}
            percentage={result.percentage}
          />
          <div className="text-center mt-3">
            <span className="text-sm font-semibold text-slate-900 block">Overall Score</span>
            <span className="text-xs text-slate-500">1 mark per correct answer · No penalty</span>
          </div>
        </div>

        {/* Right Column: 4 Stat KPI boxes */}
        <div className="md:col-span-7 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-600">
            Performance Breakdown
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Correct */}
            <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Correct Answers</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tabular-nums">
                {result.correctCount}
              </div>
              <div className="text-[11px] text-emerald-800/80">
                +1 mark each = {result.correctCount} marks
              </div>
            </div>

            {/* Incorrect */}
            <div className="border border-rose-200 bg-rose-50/50 rounded-xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-rose-800 text-xs font-semibold">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Incorrect Answers</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-rose-950 tabular-nums">
                {result.incorrectCount}
              </div>
              <div className="text-[11px] text-rose-800/80">
                0 marks deducted
              </div>
            </div>

            {/* Unanswered */}
            <div className="border border-slate-200 bg-slate-50 rounded-xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold">
                <HelpCircle className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Unanswered</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                {result.unansweredCount}
              </div>
              <div className="text-[11px] text-slate-500">
                0 marks awarded
              </div>
            </div>

            {/* Total Questions */}
            <div className="border border-indigo-200 bg-indigo-50/50 rounded-xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-indigo-800 text-xs font-semibold">
                <span>Total Questions</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-950 tabular-nums">
                {result.totalQuestions}
              </div>
              <div className="text-[11px] text-indigo-800/80">
                Max Possible: 25 marks
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onResetQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>

            <button
              onClick={scrollToReview}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span>Review All 25 Questions</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Mastery Breakdown Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Category Performance</h2>
          <span className="text-xs text-slate-500">5 Topic Domains</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(result.categoryStats).map(([category, stat]) => {
            return (
              <div
                key={category}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-slate-900 text-sm leading-snug">
                    {category}
                  </h3>
                  <span className="text-sm font-bold text-slate-900 tabular-nums">
                    {stat.percentage}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 transition-all duration-500 rounded-full"
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 tabular-nums pt-1">
                  <span>Score: {stat.correct}/{stat.total}</span>
                  <span>{stat.incorrect} incorrect · {stat.unanswered} skipped</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Answer Review Anchor */}
      <div id="detailed-review-section">
        <AnswerReview questions={questions} answers={answers} />
      </div>

      {/* Bottom Try Again Banner */}
      <div className="border border-slate-200 bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-slate-900">Want to test your knowledge again?</h3>
          <p className="text-sm text-slate-500 max-w-xl">
            Retaking the quiz will reset all answers, clear the score, and allow you to test what you learned from the explanations.
          </p>
        </div>
        <button
          onClick={onResetQuiz}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
      </div>
    </div>
  );
};
