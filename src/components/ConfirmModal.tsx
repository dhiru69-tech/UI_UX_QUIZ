import React, { useEffect } from 'react';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  totalQuestions: number;
  answeredCount: number;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  totalQuestions,
  answeredCount,
  onCancel,
  onConfirm,
}) => {
  const unansweredCount = totalQuestions - answeredCount;
  const hasUnanswered = unansweredCount > 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-xl border border-slate-200 space-y-5 relative">
        <button
          onClick={onCancel}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-label="Close confirmation dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
              hasUnanswered
                ? 'bg-amber-50 text-amber-600'
                : 'bg-emerald-50 text-emerald-600'
            }`}
          >
            {hasUnanswered ? (
              <AlertCircle className="w-6 h-6" />
            ) : (
              <CheckCircle2 className="w-6 h-6" />
            )}
          </div>

          <div className="space-y-1 pr-6">
            <h3 id="confirm-modal-title" className="text-lg font-bold text-slate-900">
              {hasUnanswered ? 'Submit Quiz with Unanswered Questions?' : 'Ready to Submit Your Quiz?'}
            </h3>
            <p className="text-xs text-slate-500">
              Once submitted, your responses will be evaluated and the complete answer key will be revealed.
            </p>
          </div>
        </div>

        {/* Stats card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Answered questions</span>
            <span className="font-semibold text-slate-900 tabular-nums">
              {answeredCount} of {totalQuestions}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Unanswered questions</span>
            <span
              className={`font-semibold tabular-nums ${
                hasUnanswered ? 'text-amber-600 font-bold' : 'text-emerald-700'
              }`}
            >
              {unansweredCount} {unansweredCount === 1 ? 'question' : 'questions'}
            </span>
          </div>

          {hasUnanswered && (
            <p className="text-xs text-amber-700 pt-1 border-t border-slate-200/60">
              Unanswered questions receive 0 marks. You can still return to answer them before submitting.
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            onClick={onCancel}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
          >
            Review Answers
          </button>
          <button
            onClick={onConfirm}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
          >
            {hasUnanswered ? 'Confirm & Submit Anyway' : 'Confirm Submission'}
          </button>
        </div>
      </div>
    </div>
  );
};
