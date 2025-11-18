import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Quiz6to8 from "../components/Quiz6to8";
import Quiz9to12 from "../components/Quiz9to12";
import Quiz13to15 from "../components/Quiz13to15";
import Quiz16to18 from "../components/Quiz16to18";
import axios from "axios";

const SubmitLoader = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-2xl">
      {/* Animated spinning icon */}
      <div className="relative mb-4">
        <div className="w-16 h-16 border-4 border-green-200 rounded-full animate-spin border-t-green-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl animate-pulse">
            <i className="fa-solid fa-check text-green-500 text-2xl"></i>
          </span>
        </div>
      </div>

      {/* Loading text with animated dots */}
      <div className="text-gray-700 font-medium text-lg mb-2">
        Analyzing your answers
      </div>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  </div>
);

const Quiz = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
  const location = useLocation();
  const navigate = useNavigate();
  const { quizData } = location.state || {};
  const [answers, setAnswers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!quizData) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">
            No quiz loaded. Please go back and select an age group.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const { quizId, sessionId, quiz, ageRange } = quizData;

  const handleAnswer = (questionIndex: number, answer: string) => {
    setAnswers((prev) => {
      const updated = prev.filter((a) => !(a.questionIndex === questionIndex));
      return [...updated, { questionIndex, answer }];
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${apiUrl}/ai/guest/quiz/submit`, {
        quizId,
        sessionId,
        answers,
      });
      console.log(response.data);
      // Pass the complete results data to the results page
      navigate("/results", {
        state: {
          analysis: response.data.analysis,
          answers: response.data.answers,
          quizId: response.data.quizDetails.id,
          ageRange,
        },
      });
    } catch (err) {
      console.error("❌ Failed to submit answers", err);
      // Handle error - maybe show error message to user
    }
  };

  const renderQuiz = () => {
    const commonProps = {
      quiz,
      onAnswer: handleAnswer,
      onSubmit: handleSubmit,
      answers,
    };

    switch (ageRange) {
      case "6-8":
        return <Quiz6to8 {...commonProps} />;
      case "9-12":
        return <Quiz9to12 {...commonProps} />;
      case "13-15":
        return <Quiz13to15 {...commonProps} />;
      case "16-18":
        return <Quiz16to18 {...commonProps} />;
      default:
        return <div>Quiz not found for age range: {ageRange}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />
      <main>{renderQuiz()}</main>
      {isSubmitting && <SubmitLoader />}
    </div>
  );
};

export default Quiz;
