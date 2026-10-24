import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, ChevronRight, ChevronLeft, ArrowUp } from 'lucide-react';
import { Question } from '../data/questions';
import { UserAnswers } from '../types/quiz';

interface AnswerReviewProps {
  questions: Question[];
  answers: UserAnswers;
  onJumpToQuestion?: (idx: number) => void;
}

type FilterType = 'all' | 'correct' | 'incorrect' | 'unanswered';

export const AnswerReview: React.FC<AnswerReviewProps> = ({
  questions,
  answers,
}) => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  // Group questions by status
  const filteredQuestions = questions.filter((q) => {
    const userAns = answers[q.id];
    if (filter === 'all') return true;
    if (filter === 'correct') return userAns === q.correctAnswer;
    if (filter === 'incorrect') return userAns && userAns !== q.correctAnswer;
    if (filter === 'unanswered') return !userAns;
    return true;
  });

  const correctCount = questions.filter((q) => answers[q.id] === q.correctAnswer).length;
  const incorrectCount = questions.filter((q) => answers[q.id] && answers[q.id] !== q.correctAnswer).length;
  const unansweredCount = questions.filter((q) => !answers[q.id]).length;

  const scrollToQuestion = (id: number) => {
    setActiveQuestionId(id);
    const element = document.getElementById(`review-question-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 pt-6 border-t border-slate-200">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Detailed Answer Review</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Compare your selections with the official answer key and read the full educational rationale for each question.
          </p>
        </div>

        {/* Filter Controls (Segmented buttons) */}
        <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All (25)
          </button>
          <button
            onClick={() => setFilter('correct')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'correct'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Correct ({correctCount})
          </button>
          <button
            onClick={() => setFilter('incorrect')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'incorrect'
                ? 'bg-white text-rose-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Incorrect ({incorrectCount})
          </button>
          <button
            onClick={() => setFilter('unanswered')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'unanswered'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Unanswered ({unansweredCount})
          </button>
        </div>
      </div>

      {/* Review Jump Palette */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
          <span>Jump to Question in Review:</span>
          <span className="text-slate-400 font-normal">Click any number to view question</span>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {questions.map((q) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isUnanswered = !userAns;

            let badgeStyle = '';
            if (isUnanswered) {
              badgeStyle = 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200';
            } else if (isCorrect) {
              badgeStyle = 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100';
            } else {
              badgeStyle = 'bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100';
            }

            const isCurrentActive = activeQuestionId === q.id;

            return (
              <button
                key={q.id}
                onClick={() => scrollToQuestion(q.id)}
                className={`w-8 h-8 rounded-lg text-xs font-bold border transition-all flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 tabular-nums ${badgeStyle} ${
                  isCurrentActive ? 'ring-2 ring-indigo-500 ring-offset-1' : ''
                }`}
                title={`Question ${q.id}: ${
                  isUnanswered ? 'Not Answered' : isCorrect ? 'Correct' : 'Incorrect'
                }`}
              >
                {q.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Questions Review List */}
      <div className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-slate-500">
            No questions match the selected filter.
          </div>
        ) : (
          filteredQuestions.map((question) => {
            const userAnswer = answers[question.id];
            const isAnswered = Boolean(userAnswer);
            const isCorrect = userAnswer === question.correctAnswer;
            const selectedOptionObj = question.options.find((o) => o.key === userAnswer);
            const correctOptionObj = question.options.find((o) => o.key === question.correctAnswer);

            return (
              <article
                key={question.id}
                id={`review-question-${question.id}`}
                className={`bg-white rounded-xl border p-6 sm:p-7 shadow-sm transition-all space-y-5 scroll-mt-24 ${
                  activeQuestionId === question.id
                    ? 'border-indigo-400 ring-2 ring-indigo-100'
                    : 'border-slate-200'
                }`}
              >
                {/* Card Top: Number, Category, Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-bold text-slate-900 text-sm">Question {question.id}</span>
                    <span aria-hidden="true">·</span>
                    <span>{question.category}</span>
                  </div>

                  {/* Status Indicator (Pairing color + text + icon for accessibility) */}
                  <div>
                    {!isAnswered ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                        <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                        <span>Not Answered</span>
                      </div>
                    ) : isCorrect ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Correct</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-50 text-rose-800 border border-rose-200 text-xs font-semibold">
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Incorrect</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {question.question}
                </h3>

                {/* All 4 Options with Authoritative State Highlights */}
                <div className="space-y-2.5 pt-1">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Options & Choices:
                  </div>

                  {question.options.map((opt) => {
                    const isOptionCorrect = opt.key === question.correctAnswer;
                    const isUserChoice = opt.key === userAnswer;

                    let rowStyle = 'border-slate-200 bg-slate-50/50 text-slate-700';
                    let badgeStyle = 'bg-slate-200 text-slate-700';

                    if (isOptionCorrect) {
                      rowStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 ring-1 ring-emerald-500 font-medium';
                      badgeStyle = 'bg-emerald-600 text-white';
                    } else if (isUserChoice && !isCorrect) {
                      rowStyle = 'border-rose-400 bg-rose-50/80 text-rose-950 ring-1 ring-rose-400';
                      badgeStyle = 'bg-rose-600 text-white';
                    }

                    return (
                      <div
                        key={opt.key}
                        className={`p-3.5 rounded-xl border flex items-start justify-between gap-3 text-sm transition-colors ${rowStyle}`}
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <span
                            className={`w-6 h-6 rounded-md text-xs font-bold flex items-center justify-center shrink-0 tabular-nums ${badgeStyle}`}
                          >
                            {opt.key}
                          </span>
                          <span className="leading-relaxed pt-0.5">{opt.text}</span>
                        </div>

                        {/* Semantic label on option */}
                        <div className="shrink-0 flex items-center gap-2 pt-0.5 text-xs font-semibold">
                          {isUserChoice && (
                            <span className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                              (Your Answer)
                            </span>
                          )}
                          {isOptionCorrect && (
                            <span className="text-emerald-700 flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>Correct Answer</span>
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Answer Summary Callout */}
                <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Your Response:</span>
                    <span className="font-semibold text-slate-800">
                      {isAnswered ? (
                        <>Option {userAnswer}: {selectedOptionObj?.text}</>
                      ) : (
                        <span className="text-slate-500 italic">None (Not Answered)</span>
                      )}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Correct Answer:</span>
                    <span className="font-semibold text-emerald-800">
                      Option {question.correctAnswer}: {correctOptionObj?.text}
                    </span>
                  </div>
                </div>

                {/* "Why is this correct?" Explanation Section */}
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-5 space-y-1.5">
                  <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span>Why is this correct?</span>
                  </div>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Floating or bottom back-to-top button */}
      <div className="flex justify-end pt-4">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-xs transition-colors cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Score Summary</span>
        </button>
      </div>
    </div>
  );
};
