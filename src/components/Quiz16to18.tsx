import React, { useState } from "react";

interface Quiz16to18Props {
  quiz: any;
  onAnswer: (answerIndex: number) => void;
  onSubmit: () => void;
  answers: number[];
}

const Quiz16to18: React.FC<Quiz16to18Props> = ({
  quiz,
  onAnswer,
  onSubmit,
  answers,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const questions = quiz.questions;

  if (!quiz || !questions || questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  const currentQuestionData = questions[currentQuestion];
  const totalQuestions = questions.length;
  const currentQuestionNumber = currentQuestion + 1;

  const handleAnswerSelect = (index: number) => {
    if (isTransitioning) return;
    setSelectedIndex(index);
  };

  const handleNext = async () => {
    if (selectedIndex === null || isTransitioning) return;

    setIsTransitioning(true);

    // Pass the numeric index — backend expects number[]
    onAnswer(selectedIndex);

    await new Promise((resolve) => setTimeout(resolve, 300));

    setSelectedIndex(null);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      onSubmit();
    }

    setIsTransitioning(false);
  };

  const getContextualCategory = (questionIndex: number) => {
    const categories = [
      "Career Assessment",
      "Strategic Planning",
      "Work Preferences",
      "Values Assessment",
      "Development Preferences",
    ];
    return categories[questionIndex % categories.length];
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white rounded-full px-8 py-4 shadow-lg mb-6">
            <i className="fa-solid fa-crown text-2xl"></i>
            <span className="font-bold text-lg">Quiz for Ages 16-18</span>
            <i className="fa-solid fa-graduation-cap text-2xl"></i>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive evaluation designed to identify your professional
            strengths and career pathway alignment. Choose your responses
            carefully and truthfully, the more diverse your response, the better
            profiling you get
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-gray-600">
              Assessment Progress
            </div>
            {/* <div className="text-sm font-bold text-[#4CAF50]">
              {Math.floor((currentQuestionNumber / totalQuestions) * 100)}%
              Complete
            </div> */}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] h-3 rounded-full transition-all duration-700"
              style={{
                width: `${Math.floor((currentQuestionNumber / totalQuestions) * 100)}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isTransitioning ? "opacity-75 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {currentQuestionNumber}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium text-[#4CAF50] mb-1">
                  {getContextualCategory(currentQuestion)}
                </div>
                <h2 className="text-xl font-bold text-[#212121]">
                  {currentQuestionData?.text ||
                    currentQuestionData?.question ||
                    "Question not found"}
                </h2>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="p-8">
            <div className="space-y-4">
              {(
                currentQuestionData?.answers ||
                currentQuestionData?.options ||
                []
              ).map((answer: string, index: number) => (
                <button
                  key={`${currentQuestion}-${index}`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isTransitioning}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 group ${
                    selectedIndex === index
                      ? "border-[#4CAF50] bg-gradient-to-r from-green-50 to-emerald-50"
                      : "border-gray-100 hover:border-[#4CAF50]/50 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50"
                  } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                        selectedIndex === index
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    >
                      <span className="text-white font-bold text-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-[#212121] font-semibold text-lg">
                        {answer}
                      </div>
                    </div>
                    {selectedIndex === index && (
                      <div className="flex-shrink-0">
                        <i className="fa-solid fa-check-circle text-[#4CAF50] text-2xl"></i>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Next Button */}
            {selectedIndex !== null && (
              <div className="text-center mt-8">
                <button
                  onClick={handleNext}
                  disabled={isTransitioning}
                  className={`bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all ${
                    isTransitioning ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <i className="fa-solid fa-arrow-right mr-2"></i>
                  {isTransitioning
                    ? "Processing..."
                    : currentQuestionNumber === totalQuestions
                      ? "Complete Assessment"
                      : "Continue Assessment"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Question Navigator */}
        <div className="flex justify-center mt-8 gap-2 overflow-x-auto pb-2">
          {questions.map((_: any, index: number) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-500 flex-shrink-0 ${
                index < currentQuestion
                  ? "bg-[#4CAF50] scale-110"
                  : index === currentQuestion
                    ? "bg-[#4CAF50] scale-125 ring-4 ring-[#4CAF50]/30 animate-pulse"
                    : "bg-gray-300"
              }`}
              title={`Question ${index + 1}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz16to18;
