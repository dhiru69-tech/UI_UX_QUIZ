import { Question, CATEGORIES } from '../data/questions';
import { QuizResult, UserAnswers, CategoryScore } from '../types/quiz';

export function calculateQuizResult(questions: Question[], answers: UserAnswers): QuizResult {
  const totalQuestions = questions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const categoryStats: Record<string, CategoryScore> = {};

  CATEGORIES.forEach((cat) => {
    categoryStats[cat] = {
      total: 0,
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      percentage: 0,
    };
  });

  questions.forEach((q) => {
    const userAnswer = answers[q.id];
    const cat = q.category;

    if (!categoryStats[cat]) {
      categoryStats[cat] = {
        total: 0,
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        percentage: 0,
      };
    }

    categoryStats[cat].total += 1;

    if (!userAnswer) {
      unansweredCount += 1;
      categoryStats[cat].unanswered += 1;
    } else if (userAnswer === q.correctAnswer) {
      correctCount += 1;
      categoryStats[cat].correct += 1;
    } else {
      incorrectCount += 1;
      categoryStats[cat].incorrect += 1;
    }
  });

  // Calculate percentages per category
  Object.keys(categoryStats).forEach((cat) => {
    const stat = categoryStats[cat];
    stat.percentage = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
  });

  const score = correctCount; // 1 mark per correct answer, 0 for incorrect or unanswered
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  let performanceMessage = '';
  if (percentage >= 90) {
    performanceMessage = 'Excellent! You have strong UI/UX knowledge.';
  } else if (percentage >= 75) {
    performanceMessage = 'Great work! You have a good understanding.';
  } else if (percentage >= 50) {
    performanceMessage = 'Good start! Revise the topics you missed.';
  } else {
    performanceMessage = 'Keep learning! Review the explanations and try again.';
  }

  return {
    totalQuestions,
    correctCount,
    incorrectCount,
    unansweredCount,
    score,
    percentage,
    performanceMessage,
    categoryStats,
  };
}
