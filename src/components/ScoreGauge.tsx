import React from 'react';

interface ScoreGaugeProps {
  score: number;
  total: number;
  percentage: number;
}

export const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score, total, percentage }) => {
  const size = 180;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Semantic color for gauge stroke
  let strokeColor = 'text-indigo-600';
  if (percentage >= 90) {
    strokeColor = 'text-emerald-600';
  } else if (percentage >= 75) {
    strokeColor = 'text-indigo-600';
  } else if (percentage >= 50) {
    strokeColor = 'text-amber-500';
  } else {
    strokeColor = 'text-rose-500';
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="w-full h-full -rotate-90 transform"
          viewBox={`0 0 ${size} ${size}`}
          aria-hidden="true"
        >
          {/* Background Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="text-slate-100"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
          />
          {/* Progress Arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className={`${strokeColor} transition-all duration-1000 ease-out`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
            {percentage}%
          </span>
          <span className="text-xs font-semibold text-slate-500 mt-0.5 tabular-nums">
            {score} / {total} Marks
          </span>
        </div>
      </div>
    </div>
  );
};
