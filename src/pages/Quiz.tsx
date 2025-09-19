import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Quiz6to8 from "../components/Quiz6to8";
import Quiz9to12 from "../components/Quiz9to12";
import Quiz13to15 from "../components/Quiz13to15";
import Quiz16to18 from "../components/Quiz16to18";
import axios from "axios";

const Quiz = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
  const location = useLocation();
  const navigate = useNavigate();
  const { quizData } = location.state || {};
  const [answers, setAnswers] = useState([]);

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

  const { quizId, quiz, ageRange } = quizData;

  const handleAnswer = (questionIndex: number, answer: string) => {
    setAnswers((prev) => {
      const updated = prev.filter((a) => !(a.questionIndex === questionIndex));
      return [...updated, { questionIndex, answer }];
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${apiUrl}/ai/guest/quiz/submit`, {
        quizId,
        answers,
      });

      // Pass the complete results data to the results page
      navigate("/results", {
        state: {
          analysis: response.data.analysis,
          answers: response.data.answers,
          quizId: response.data.quizId,
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
    </div>
  );
};

export default Quiz;
