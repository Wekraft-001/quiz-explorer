// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Quiz9to12 = () => {
//   const navigate = useNavigate();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState<string[]>([]);

//   const questions = [
//     {
//       id: 1,
//       question: "What type of project excites you most? 🚀",
//       options: [
//         { text: "Building something with code", icon: "fa-solid fa-code", color: "from-blue-500 to-blue-600" },
//         { text: "Creating digital art", icon: "fa-solid fa-palette", color: "from-pink-500 to-pink-600" },
//         { text: "Solving math puzzles", icon: "fa-solid fa-calculator", color: "from-green-500 to-green-600" },
//         { text: "Writing stories", icon: "fa-solid fa-pen-fancy", color: "from-purple-500 to-purple-600" }
//       ]
//     },
//     {
//       id: 2,
//       question: "In group projects, you usually... 🤝",
//       options: [
//         { text: "Lead and organize everyone", icon: "fa-solid fa-crown", color: "from-yellow-500 to-orange-500" },
//         { text: "Come up with creative ideas", icon: "fa-solid fa-lightbulb", color: "from-blue-500 to-cyan-500" },
//         { text: "Focus on making it perfect", icon: "fa-solid fa-star", color: "from-green-500 to-teal-500" },
//         { text: "Support and encourage others", icon: "fa-solid fa-heart", color: "from-pink-500 to-red-500" }
//       ]
//     },
//     {
//       id: 3,
//       question: "Your ideal weekend activity? 🎯",
//       options: [
//         { text: "Learn a new skill online", icon: "fa-solid fa-graduation-cap", color: "from-indigo-500 to-indigo-600" },
//         { text: "Compete in a game tournament", icon: "fa-solid fa-gamepad", color: "from-red-500 to-red-600" },
//         { text: "Explore nature and take photos", icon: "fa-solid fa-camera", color: "from-green-500 to-green-600" },
//         { text: "Build or fix something", icon: "fa-solid fa-tools", color: "from-gray-500 to-gray-600" }
//       ]
//     },
//     {
//       id: 4,
//       question: "What motivates you most? ⚡",
//       options: [
//         { text: "Solving complex challenges", icon: "fa-solid fa-puzzle-piece", color: "from-purple-500 to-purple-600" },
//         { text: "Helping others succeed", icon: "fa-solid fa-hands-helping", color: "from-blue-500 to-blue-600" },
//         { text: "Creating something unique", icon: "fa-solid fa-magic-wand-sparkles", color: "from-pink-500 to-pink-600" },
//         { text: "Becoming really good at something", icon: "fa-solid fa-trophy", color: "from-yellow-500 to-yellow-600" }
//       ]
//     },
//     {
//       id: 5,
//       question: "In the future, you'd like to... 🌟",
//       options: [
//         { text: "Invent new technology", icon: "fa-solid fa-robot", color: "from-cyan-500 to-cyan-600" },
//         { text: "Start your own business", icon: "fa-solid fa-rocket", color: "from-orange-500 to-orange-600" },
//         { text: "Make the world more beautiful", icon: "fa-solid fa-palette", color: "from-pink-500 to-pink-600" },
//         { text: "Discover new things", icon: "fa-solid fa-microscope", color: "from-green-500 to-green-600" }
//       ]
//     }
//   ];

//   const handleAnswer = (answer: string) => {
//     const newAnswers = [...answers, answer];
//     setAnswers(newAnswers);

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       navigate('/results');
//     }
//   };

//   return (
//     <div className="container mx-auto px-6 py-8">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
//             <i className="fa-solid fa-brain text-[#1A73E8] text-2xl animate-pulse"></i>
//             <span className="text-[#212121] font-semibold">Budding Innovator Quest</span>
//             <i className="fa-solid fa-rocket text-[#FF4081] text-xl"></i>
//           </div>

//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-[#1A73E8]">{currentQuestion + 1}</div>
//               <div className="text-sm text-gray-500">Question</div>
//             </div>
//             <div className="w-16 h-1 bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] rounded-full"></div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-[#4CAF50]">{questions.length}</div>
//               <div className="text-sm text-gray-500">Total</div>
//             </div>
//           </div>
//         </div>

//         {/* Progress */}
//         <div className="mb-8">
//           <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
//             <div
//               className="bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] h-2 rounded-full transition-all duration-700 ease-out"
//               style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* Question Card */}
//         <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl mb-8 border border-blue-100">
//           <div className="text-center mb-8">
//             <div className="w-24 h-24 bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
//               <i className="fa-solid fa-lightbulb text-white text-3xl"></i>
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-[#212121] mb-4">
//               {questions[currentQuestion].question}
//             </h2>
//             <p className="text-gray-600">Choose what resonates with you most!</p>
//           </div>

//           {/* Interactive Options */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {questions[currentQuestion].options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleAnswer(option.text)}
//                 className={`bg-gradient-to-r ${option.color} text-white rounded-2xl p-6 hover:scale-105 hover:rotate-1 transform transition-all duration-300 shadow-lg hover:shadow-2xl group relative overflow-hidden`}
//               >
//                 <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative flex items-center gap-4">
//                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
//                     <i className={`${option.icon} text-2xl`}></i>
//                   </div>
//                   <span className="text-lg font-semibold text-left">{option.text}</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Progress Dots */}
//         <div className="flex justify-center gap-3">
//           {questions.map((_, index) => (
//             <div
//               key={index}
//               className={`transition-all duration-500 rounded-full ${
//                 index < currentQuestion
//                   ? 'w-3 h-3 bg-[#4CAF50]'
//                   : index === currentQuestion
//                   ? 'w-6 h-3 bg-[#1A73E8] animate-pulse'
//                   : 'w-3 h-3 bg-gray-300'
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz9to12;

// Quiz9to12.tsx - Age-specific UI for 9-12 year olds
import React, { useState } from "react";

interface Quiz9to12Props {
  quiz: any;
  onAnswer: (phaseIndex: number, questionIndex: number, answer: string) => void;
  onSubmit: () => void;
  answers: any[];
}

const Quiz9to12: React.FC<Quiz9to12Props> = ({
  quiz,
  onAnswer,
  onSubmit,
  answers,
}) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  if (!quiz || !quiz.phases || quiz.phases.length === 0) {
    return <div>Loading quiz...</div>;
  }

  const currentPhaseData = quiz.phases[currentPhase];
  const currentQuestionData = currentPhaseData.questions[currentQuestion];
  const totalQuestions = quiz.phases.reduce(
    (sum, phase) => sum + phase.questions.length,
    0
  );
  const currentQuestionNumber =
    quiz.phases
      .slice(0, currentPhase)
      .reduce((sum, phase) => sum + phase.questions.length, 0) +
    currentQuestion +
    1;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      onAnswer(currentPhase, currentQuestion, selectedAnswer);
      setSelectedAnswer(null);

      // Move to next question
      if (currentQuestion < currentPhaseData.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else if (currentPhase < quiz.phases.length - 1) {
        setCurrentPhase(currentPhase + 1);
        setCurrentQuestion(0);
      } else {
        // Quiz completed
        onSubmit();
      }
    }
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
              {currentPhaseData.name}
            </span>
            <i className="fa-solid fa-rocket text-[#FF4081] text-xl"></i>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
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
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] h-2 rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${(currentQuestionNumber / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl mb-8 border border-blue-100">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
              <i className="fa-solid fa-question text-white text-3xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#212121] mb-4">
              {currentQuestionData.text}
            </h2>
            <p className="text-gray-600">
              Choose what resonates with you most!
            </p>
          </div>

          {/* Interactive Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentQuestionData.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(answer)}
                className={`bg-gradient-to-r ${getGradientForOption(
                  index
                )} text-white rounded-2xl p-6 hover:scale-105 hover:rotate-1 transform transition-all duration-300 shadow-lg hover:shadow-2xl group relative overflow-hidden ${
                  selectedAnswer === answer
                    ? "ring-4 ring-yellow-400 scale-105"
                    : ""
                }`}
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
              disabled={!selectedAnswer}
              className={`bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all ${
                !selectedAnswer ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <i className="fa-solid fa-arrow-right mr-2"></i>
              {currentQuestionNumber === totalQuestions
                ? "Complete Quiz"
                : "Next Question"}
            </button>
          </div>
        </div>

        {/* Fun Break Display */}
        {currentPhaseData.funBreak && (
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-6 border-2 border-dashed border-cyan-300">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-cyan-700 font-medium italic">
                {currentPhaseData.funBreak}
              </p>
            </div>
          </div>
        )}

        {/* Progress Dots */}
        <div className="flex justify-center gap-3">
          {[...Array(totalQuestions)].map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 rounded-full ${
                index < currentQuestionNumber - 1
                  ? "w-3 h-3 bg-[#4CAF50]"
                  : index === currentQuestionNumber - 1
                  ? "w-6 h-3 bg-[#1A73E8] animate-pulse"
                  : "w-3 h-3 bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz9to12;
