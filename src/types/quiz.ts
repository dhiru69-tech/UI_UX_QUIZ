import { OptionKey } from '../data/questions';

export type QuizState = 'welcome' | 'in_progress' | 'results';

export type UserAnswers = Record<number, OptionKey>;

export interface CategoryScore {
  total: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  percentage: number;
}

export interface QuizResult {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  score: number;
  percentage: number;
  performanceMessage: string;
  categoryStats: Record<string, CategoryScore>;
}
