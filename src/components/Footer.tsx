import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <span className="font-semibold text-slate-700">UI/UX Mastery Quiz</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>Educational Assessment Platform</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>25 Questions</span>
          <span aria-hidden="true">·</span>
          <span>5 Knowledge Domains</span>
          <span aria-hidden="true">·</span>
          <span>WCAG & UX Laws Grounded</span>
        </div>
      </div>
    </footer>
  );
};
