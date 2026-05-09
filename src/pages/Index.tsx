import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import AgeSelection from "../components/AgeSelection";
import FeaturesPreview from "../components/FeaturesPreview";
import { fetchGuestQuiz } from "@/services/quizService";

// Cute Loader Component
const CuteLoader = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-2xl">
      {/* Animated spinning brain/book icon */}
      <div className="relative mb-4">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <span className="text-2xl animate-pulse">🧠</span> */}
          <span className="text-2xl animate-pulse">
            <i className="fa-solid fa-magic-wand-sparkles text-[#FFC107] text-2xl animate-spin"></i>
          </span>
        </div>
      </div>

      {/* Loading text with animated dots */}
      <div className="text-gray-700 font-medium text-lg mb-2">
        Preparing your quiz
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

const Index = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleAgeSelect = async (age: string) => {
    setIsLoading(true);
    try {
      const data = await fetchGuestQuiz("guest01", age);
      navigate("/quiz", { state: { quizData: data, ageRange: age } });
    } catch (error) {
      console.error("Failed to fetch quiz:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />
      <main>
        <AgeSelection onAgeSelect={handleAgeSelect} />
        <FeaturesPreview />
      </main>

      {/* Render loader when loading */}
      {isLoading && <CuteLoader />}
    </div>
  );
};

export default Index;
