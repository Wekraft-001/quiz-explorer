import React, { useState } from "react";

interface Quiz13to15Props {
  quiz: any;
  onAnswer: (questionIndex: number, answer: string) => void;
  onSubmit: () => void;
  answers: any[];
}

const Quiz13to15: React.FC<Quiz13to15Props> = ({
  quiz,
  onAnswer,
  onSubmit,
  answers,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showInsight, setShowInsight] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const questions = quiz.questions;

  if (!quiz || !questions || questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  const currentQuestionData = questions[currentQuestion];
  const totalQuestions = questions.length;
  const currentQuestionNumber = currentQuestion + 1;

  const handleAnswerSelect = (answer: string) => {
    if (isTransitioning) return;
    setSelectedAnswer(answer);
    setShowInsight(true);
  };

  const handleNext = async () => {
    if (!selectedAnswer || isTransitioning) return;

    setIsTransitioning(true);

    // Store the current question index for answer submission
    const questionIndex = currentQuestion;

    // Submit the answer
    onAnswer(questionIndex, selectedAnswer);

    // Wait a moment for the answer to be processed
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Clear selected answer for next question
    setSelectedAnswer(null);
    setShowInsight(false);

    // Move to next question or submit
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Quiz completed
      onSubmit();
    }

    setIsTransitioning(false);
  };

  const getOptionIcon = (index: number) => {
    const icons = [
      "fa-solid fa-globe",
      "fa-solid fa-lightbulb",
      "fa-solid fa-chart-line",
      "fa-solid fa-balance-scale",
      "fa-solid fa-search",
      "fa-solid fa-brain",
    ];
    return icons[index % icons.length];
  };

  // const getInsightForAnswer = (answer: string) => {
  //   // This would ideally come from your API data
  //   const insights = {
  //     "Making a real impact on society": "Social Impact Driven",
  //     "Creative expression and innovation": "Creative Innovator",
  //     "Financial stability and growth": "Success Oriented",
  //     "Work-life balance and flexibility": "Balance Seeker",
  //   };
  //   return insights[answer] || "Future-Focused";
  // };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF4081] to-[#E91E63] text-white rounded-full px-6 py-3 shadow-lg mb-6">
            <i className="fa-solid fa-fire text-2xl animate-pulse"></i>
            <span className="font-semibold">Quiz for Ages 13-15</span>
            <i className="fa-solid fa-star text-xl"></i>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-[#FF4081]">
              {currentQuestionNumber}/{totalQuestions}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#FF4081] to-[#E91E63] h-2 rounded-full transition-all duration-700"
              style={{
                width: `${Math.floor(
                  (currentQuestionNumber / totalQuestions) * 100
                )}%`,
              }}
            ></div>
          </div>
          <div className="text-right mt-1">
            <span className="text-xs text-gray-500">
              {Math.floor((currentQuestionNumber / totalQuestions) * 100)}%
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden mb-6 transition-all duration-300 ${
            isTransitioning ? "opacity-75 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {/* Question Header */}
          <div className="bg-gradient-to-r from-[#FF4081] to-[#E91E63] text-white p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">
                  {currentQuestionNumber}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  {currentQuestionData?.text ||
                    currentQuestionData?.question ||
                    "Question not found"}
                </h2>
                <p className="text-pink-100 text-sm mt-1">
                  Think about how this applies to your future goals...
                </p>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="p-6">
            <div className="space-y-4">
              {(
                currentQuestionData?.answers ||
                currentQuestionData?.options ||
                []
              ).map((answer: string, index: number) => (
                <button
                  key={`${currentQuestion}-${index}`}
                  onClick={() => handleAnswerSelect(answer)}
                  disabled={isTransitioning}
                  className={`w-full bg-gray-50 hover:bg-gradient-to-r hover:from-[#FF4081]/10 hover:to-[#E91E63]/10 rounded-xl p-4 text-left transition-all duration-300 hover:shadow-lg border-2 group ${
                    selectedAnswer === answer
                      ? "border-[#FF4081] bg-gradient-to-r from-[#FF4081]/10 to-[#E91E63]/10"
                      : "border-transparent hover:border-[#FF4081]/30"
                  } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r from-[#FF4081] to-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                        selectedAnswer === answer
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    >
                      <i
                        className={`${getOptionIcon(index)} text-white text-lg`}
                      ></i>
                    </div>
                    <div>
                      <div className="text-[#212121] font-semibold mb-1">
                        {answer}
                      </div>
                      {selectedAnswer === answer && showInsight && (
                        <div className="text-sm text-[#FF4081] font-medium animate-fade-in">
                          {/* Insight: {getInsightForAnswer(answer)} */}
                        </div>
                      )}
                    </div>
                    {selectedAnswer === answer && (
                      <div className="ml-auto">
                        <i className="fa-solid fa-check-circle text-[#FF4081] text-2xl"></i>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Next Button */}
            {selectedAnswer && (
              <div className="text-center mt-8">
                <button
                  onClick={handleNext}
                  disabled={isTransitioning}
                  className={`bg-gradient-to-r from-[#FF4081] to-[#E91E63] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all animate-fade-in ${
                    isTransitioning ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <i className="fa-solid fa-arrow-right mr-2"></i>
                  {isTransitioning
                    ? "Processing..."
                    : currentQuestionNumber === totalQuestions
                    ? "Complete Assessment"
                    : "Next Question"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 overflow-x-auto pb-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 flex-shrink-0 ${
                index < currentQuestion
                  ? "bg-[#FF4081]" // Completed questions
                  : index === currentQuestion
                  ? "bg-[#FF4081] scale-125 animate-pulse" // Current question
                  : "bg-gray-300" // Upcoming questions
              }`}
              title={`Question ${index + 1}`}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Quiz13to15;
