import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Quiz6to8 from "../components/Quiz6to8";
import Quiz9to12 from "../components/Quiz9to12";
import Quiz13to15 from "../components/Quiz13to15";
import Quiz16to18 from "../components/Quiz16to18";
import { submitGuestQuiz } from "../services/quizService";

const CuteLoader = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-2xl">
      <div className="relative mb-4">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="fa-solid fa-magic-wand-sparkles text-[#FFC107] text-2xl animate-spin"></i>
        </div>
      </div>
      <div className="text-gray-700 font-medium text-lg mb-2">
        Analysing your answers
      </div>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  </div>
);

const Quiz = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const quizData = state?.quizData;
  const ageRange: string = quizData?.ageRange ?? state?.ageRange ?? "";

  const answersRef = useRef<number[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!quizData) {
    navigate("/");
    return null;
  }

  const handleAnswer = (answerIndex: number) => {
    const updated = [...answersRef.current, answerIndex];
    answersRef.current = updated;
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    const finalAnswers = answersRef.current;
    const quizId = quizData.quizId;
    const sessionId = quizData.sessionId ?? "guest01";

    if (!quizId) {
      console.error("[Quiz] quizId missing from quizData:", quizData);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitGuestQuiz(quizId, sessionId, finalAnswers);
      navigate("/results", { state: result });
    } catch (error) {
      console.error("Failed to submit quiz:", error);
      setIsSubmitting(false);
    }
  };

  const sharedProps = {
    quiz: quizData.quiz,
    onAnswer: handleAnswer,
    onSubmit: handleSubmit,
    answers,
  };

  const renderQuiz = () => {
    switch (ageRange) {
      case "6-8":
        return <Quiz6to8 {...sharedProps} />;
      case "9-12":
        return <Quiz9to12 {...sharedProps} />;
      case "13-15":
        return <Quiz13to15 {...sharedProps} />;
      case "16-18":
        return <Quiz16to18 {...sharedProps} />;
      default:
        return <Quiz9to12 {...sharedProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />
      <main>{renderQuiz()}</main>
      {isSubmitting && <CuteLoader />}
    </div>
  );
};

export default Quiz;
