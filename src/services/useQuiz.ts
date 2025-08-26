import { useState } from "react";
import axios from "axios";

export function useQuiz(
  quizData: any,
  sessionId: string,
  onComplete: (answers: any[]) => void
) {
  const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);

  const handleAnswer = async (answer: any) => {
    const question = quizData.questions[currentQuestion];
    const newAnswers = [...answers, { questionId: question.id, answer }];
    setAnswers(newAnswers);

    try {
      await axios.post(`${apiUrl}/ai/guest/quiz/submit`, {
        sessionId,
        questionId: question.id,
        answer,
      });
    } catch (err) {
      console.error("❌ Failed to submit answer:", err);
    }

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  return {
    currentQuestion,
    answers,
    handleAnswer,
    totalQuestions: quizData.questions.length,
    question: quizData.questions[currentQuestion],
  };
}
