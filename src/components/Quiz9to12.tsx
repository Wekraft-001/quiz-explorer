import React, { useState } from "react";

interface Quiz9to12Props {
  quiz: any;
  onAnswer: (questionIndex: number, answer: string) => void;
  onSubmit: () => void;
  answers: any[];
}

const Quiz9to12: React.FC<Quiz9to12Props> = ({
  quiz,
  onAnswer,
  onSubmit,
  answers,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const questions = quiz.questions;

  // Fix the loading condition
  if (!quiz || !questions || questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  const currentQuestionData = questions[currentQuestion];
  const totalQuestions = questions.length;
  const currentQuestionNumber = currentQuestion + 1;

  const handleAnswerClick = (answer: string) => {
    if (isTransitioning) return;
    setSelectedAnswer(answer);
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

    // Move to next question or submit
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Quiz completed
      onSubmit();
    }

    setIsTransitioning(false);
  };

  const getGradientForOption = (index: number) => {
    const gradients = [
      "from-blue-500 to-blue-600",
      "from-green-500 to-green-600",
      "from-purple-500 to-purple-600",
      "from-pink-500 to-pink-600",
      "from-indigo-500 to-indigo-600",
      "from-red-500 to-red-600",
    ];
    return gradients[index % gradients.length];
  };

  const getIconForOption = (index: number) => {
    const icons = [
      "fa-solid fa-lightbulb",
      "fa-solid fa-rocket",
      "fa-solid fa-brain",
      "fa-solid fa-star",
      "fa-solid fa-code",
      "fa-solid fa-gamepad",
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <i className="fa-solid fa-brain text-[#1A73E8] text-2xl animate-pulse"></i>
            <span className="text-[#212121] font-semibold">
              Quiz for Ages 9-12
            </span>
            <i className="fa-solid fa-rocket text-[#FF4081] text-xl"></i>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1A73E8]">
                {currentQuestionNumber}
              </div>
              <div className="text-sm text-gray-500">Question</div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] rounded-full"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4CAF50]">
                {totalQuestions}
              </div>
              <div className="text-sm text-gray-500">Total</div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[#212121]">
              Question {currentQuestionNumber} of {totalQuestions}
            </span>
            <span className="text-sm text-gray-500">
              {Math.floor((currentQuestionNumber / totalQuestions) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] h-2 rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${Math.floor(
                  (currentQuestionNumber / totalQuestions) * 100
                )}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div
          className={`bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl mb-8 border border-blue-100 transition-all duration-300 ${
            isTransitioning ? "opacity-75 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
              <i className="fa-solid fa-question text-white text-3xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#212121] mb-4">
              {currentQuestionData?.text ||
                currentQuestionData?.question ||
                "Question not found"}
            </h2>
            <p className="text-gray-600">
              Choose what resonates with you most!
            </p>
          </div>

          {/* Interactive Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(
              currentQuestionData?.answers ||
              currentQuestionData?.options ||
              []
            ).map((answer: string, index: number) => (
              <button
                key={`${currentQuestion}-${index}`}
                onClick={() => handleAnswerClick(answer)}
                disabled={isTransitioning}
                className={`bg-gradient-to-r ${getGradientForOption(
                  index
                )} text-white rounded-2xl p-6 hover:scale-105 hover:rotate-1 transform transition-all duration-300 shadow-lg hover:shadow-2xl group relative overflow-hidden ${
                  selectedAnswer === answer
                    ? "ring-4 ring-yellow-400 scale-105"
                    : ""
                } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${getIconForOption(index)} text-2xl`}></i>
                  </div>
                  <span className="text-lg font-semibold text-left">
                    {answer}
                  </span>
                </div>
                {selectedAnswer === answer && (
                  <div className="absolute top-2 right-2">
                    <i className="fa-solid fa-check-circle text-yellow-400 text-2xl"></i>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleNext}
              disabled={!selectedAnswer || isTransitioning}
              className={`bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all ${
                !selectedAnswer || isTransitioning
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <i className="fa-solid fa-arrow-right mr-2"></i>
              {isTransitioning
                ? "Processing..."
                : currentQuestionNumber === totalQuestions
                ? "Complete Quiz"
                : "Next Question"}
            </button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 overflow-x-auto pb-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 rounded-full flex-shrink-0 ${
                index < currentQuestion
                  ? "w-3 h-3 bg-[#4CAF50]" // Completed questions
                  : index === currentQuestion
                  ? "w-6 h-3 bg-[#1A73E8] animate-pulse" // Current question
                  : "w-3 h-3 bg-gray-300" // Upcoming questions
              }`}
              title={`Question ${index + 1}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz9to12;
