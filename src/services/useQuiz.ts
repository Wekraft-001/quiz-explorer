import { useState } from "react";

export function useQuiz(
  quizData: any,
  onComplete: (answers: number[]) => void,
) {
  const questions = quizData?.quiz?.questions ?? [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  return {
    currentQuestion,
    answers,
    handleAnswer,
    totalQuestions: questions.length,
    question: questions[currentQuestion],
  };
}
