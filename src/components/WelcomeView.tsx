import React from 'react';
import { ArrowRight, CheckCircle2, BookOpen, Layers, Accessibility, Sparkles, HelpCircle, ShieldCheck } from 'lucide-react';
import { CATEGORIES } from '../data/questions';

interface WelcomeViewProps {
  onStartQuiz: () => void;
}

const CATEGORY_DETAILS: Record<string, { count: number; desc: string; icon: React.ElementType }> = {
  'UI Design Fundamentals': {
    count: 6,
    desc: 'Atomic Design, visual hierarchy, 60-30-10 rule, design systems, and progressive disclosure.',
    icon: Layers,
  },
  'UX Laws and Psychology': {
    count: 6,
    desc: "Fitts's Law, Hick's Law, Jakob's Law, Serial Position Effect, Tesler's Law, and Zeigarnik Effect.",
    icon: Sparkles,
  },
  'Accessibility and Inclusivity': {
    count: 4,
    desc: 'WCAG criteria, inclusive design vs accessibility, touch targets, and color-vision support.',
    icon: Accessibility,
  },
  'Usability Testing and Research': {
    count: 6,
    desc: 'Qualitative vs quantitative methods, heuristic evaluation, JTBD, and card sorting.',
    icon: BookOpen,
  },
  'UX Interviews and Case Studies': {
    count: 3,
    desc: 'Whiteboard challenge frameworks, feature adoption audits, and balancing business with user needs.',
    icon: HelpCircle,
  },
};

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onStartQuiz }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 lg:py-14 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-700">
          <span>Professional Assessment</span>
          <span aria-hidden="true">·</span>
          <span>Educational Curriculum</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          UI/UX Mastery Quiz
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Test Your Knowledge of UI/UX Design and Research
        </p>

        <p className="text-sm text-slate-500 max-w-xl mx-auto">
          Select one answer for each question. You can review your answers before submitting.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
          >
            <span>Start Quiz</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* High-Level Overview Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-slate-200 bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
            <span className="text-xl font-bold tabular-nums">25</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Total Questions</div>
            <div className="text-xs text-slate-500">4 options per question (A–D)</div>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:border-l sm:border-slate-200 sm:pl-6">
          <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
            <span className="text-xl font-bold tabular-nums">5</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Available Categories</div>
            <div className="text-xs text-slate-500">From UI basics to case studies</div>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:border-l sm:border-slate-200 sm:pl-6">
          <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Authoritative Key</div>
            <div className="text-xs text-slate-500">With in-depth rationales</div>
          </div>
        </div>
      </div>

      {/* Scoring Rules Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900">Scoring Rules & Assessment Standards</h2>
          <p className="text-sm text-slate-500">
            Understand how your assessment will be calculated before you begin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="border border-slate-100 bg-slate-50/70 rounded-lg p-4 space-y-2">
            <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Scoring Breakdown</div>
            <ul className="text-sm text-slate-600 space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Correct answer</strong> = 1 mark</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-[10px] text-slate-500 font-bold shrink-0">0</span>
                <span><strong>Incorrect answer</strong> = 0 marks (no negative marking)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center text-[10px] text-slate-500 font-bold shrink-0">0</span>
                <span><strong>Unanswered question</strong> = 0 marks</span>
              </li>
              <li className="flex items-center gap-2 text-slate-800 font-medium pt-1">
                <span className="text-xs">Formula:</span>
                <span>Percentage = (Correct Answers / 25) × 100</span>
              </li>
            </ul>
          </div>

          <div className="border border-slate-100 bg-slate-50/70 rounded-lg p-4 space-y-2">
            <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Performance Tiers</div>
            <ul className="text-sm text-slate-600 space-y-1.5 tabular-nums">
              <li className="flex items-center justify-between border-b border-slate-200/60 pb-1">
                <span className="font-medium text-slate-800">90% – 100%</span>
                <span className="text-emerald-700 font-medium">Excellent knowledge</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-200/60 pb-1">
                <span className="font-medium text-slate-800">75% – 89%</span>
                <span className="text-indigo-700 font-medium">Great understanding</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-200/60 pb-1">
                <span className="font-medium text-slate-800">50% – 74%</span>
                <span className="text-amber-700 font-medium">Good start, revise missed topics</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-medium text-slate-800">Below 50%</span>
                <span className="text-rose-700 font-medium">Keep learning, review explanations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available Categories Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">What You Will Be Tested On</h2>
          <span className="text-xs text-slate-500">5 Core Domains</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, idx) => {
            const detail = CATEGORY_DETAILS[cat];
            const Icon = detail?.icon || BookOpen;
            return (
              <div
                key={cat}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">{cat}</h3>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {detail?.count || 0} Questions
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {detail?.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Start Button bottom banner */}
      <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold">Ready to test your UI/UX knowledge?</h3>
          <p className="text-sm text-slate-300 max-w-xl">
            Take your time. You can navigate back and forth, change any answer, and review all 25 questions before final submission.
          </p>
        </div>
        <button
          onClick={onStartQuiz}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
        >
          <span>Begin Test</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
