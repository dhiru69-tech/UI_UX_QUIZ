import { useState } from 'react';
import { QUESTIONS, OptionKey } from './data/questions';
import { QuizState, UserAnswers, QuizResult } from './types/quiz';
import { calculateQuizResult } from './utils/scoring';
import { Header } from './components/Header';
import { WelcomeView } from './components/WelcomeView';
import { QuizView } from './components/QuizView';
import { ResultsView } from './components/ResultsView';
import { ConfirmModal } from './components/ConfirmModal';
import { Footer } from './components/Footer';

export default function App() {
  const [quizState, setQuizState] = useState<QuizState>('welcome');
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = QUESTIONS.length;

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleStartQuiz = () => {
    setQuizState('in_progress');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswerChange = (questionId: number, optionKey?: OptionKey) => {
    setAnswers((prev) => {
      const updated = { ...prev };
      if (optionKey) {
        updated[questionId] = optionKey;
      } else {
        delete updated[questionId];
      }
      return updated;
    });
  };

  const handleConfirmSubmit = () => {
    setShowConfirmModal(false);
    const computedResult = calculateQuizResult(QUESTIONS, answers);
    setResult(computedResult);
    setQuizState('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setResult(null);
    setQuizState('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToOverview = () => {
    setQuizState('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header
        quizState={quizState}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        onStartQuiz={handleStartQuiz}
        onRequestSubmit={() => setShowConfirmModal(true)}
        onResetQuiz={handleResetQuiz}
        onGoToOverview={handleGoToOverview}
      />

      <main className="flex-1">
        {quizState === 'welcome' && (
          <WelcomeView onStartQuiz={handleStartQuiz} />
        )}

        {quizState === 'in_progress' && (
          <QuizView
            questions={QUESTIONS}
            answers={answers}
            onAnswerChange={handleAnswerChange}
            onRequestSubmit={() => setShowConfirmModal(true)}
          />
        )}

        {quizState === 'results' && result && (
          <ResultsView
            result={result}
            questions={QUESTIONS}
            answers={answers}
            onResetQuiz={handleResetQuiz}
          />
        )}
      </main>

      {/* Unified Submission Confirmation Modal */}
      <ConfirmModal
        isOpen={showConfirmModal}
        totalQuestions={totalQuestions}
        answeredCount={answeredCount}
        onCancel={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmSubmit}
      />

      <Footer />
    </div>
  );
}
