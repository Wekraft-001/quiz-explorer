// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Quiz6to8 = () => {
//   const navigate = useNavigate();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState<string[]>([]);

//   const questions = [
//     {
//       id: 1,
//       question: "What do you love doing on Saturday? 🌈",
//       options: [
//         { text: "Draw and Create Art", icon: "fa-solid fa-palette", color: "bg-pink-400" },
//         { text: "Play Outside", icon: "fa-solid fa-sun", color: "bg-yellow-400" },
//         { text: "Read Stories", icon: "fa-solid fa-book", color: "bg-blue-400" },
//         { text: "Build with Blocks", icon: "fa-solid fa-cubes", color: "bg-green-400" }
//       ]
//     },
//     {
//       id: 2,
//       question: "How do you like to learn new things? 🧠",
//       options: [
//         { text: "With Pictures", icon: "fa-solid fa-image", color: "bg-purple-400" },
//         { text: "By Doing", icon: "fa-solid fa-hand", color: "bg-orange-400" },
//         { text: "With Friends", icon: "fa-solid fa-users", color: "bg-green-400" },
//         { text: "By Listening", icon: "fa-solid fa-ear", color: "bg-blue-400" }
//       ]
//     },
//     {
//       id: 3,
//       question: "When something is hard, what do you do? 💪",
//       options: [
//         { text: "Ask for Help", icon: "fa-solid fa-hand-holding-heart", color: "bg-pink-400" },
//         { text: "Try Again", icon: "fa-solid fa-redo", color: "bg-blue-400" },
//         { text: "Take a Break", icon: "fa-solid fa-pause", color: "bg-yellow-400" },
//         { text: "Think of New Ways", icon: "fa-solid fa-lightbulb", color: "bg-green-400" }
//       ]
//     },
//     {
//       id: 4,
//       question: "What would you like to do when you grow up? ⭐",
//       options: [
//         { text: "Help Animals", icon: "fa-solid fa-paw", color: "bg-green-400" },
//         { text: "Make Beautiful Things", icon: "fa-solid fa-sparkles", color: "bg-pink-400" },
//         { text: "Teach Others", icon: "fa-solid fa-chalkboard-teacher", color: "bg-blue-400" },
//         { text: "Explore Space", icon: "fa-solid fa-rocket", color: "bg-purple-400" }
//       ]
//     },
//     {
//       id: 5,
//       question: "Do you like helping your friends? 💝",
//       options: [
//         { text: "Yes, I Love It!", icon: "fa-solid fa-heart", color: "bg-red-400" },
//         { text: "Sometimes", icon: "fa-solid fa-thumbs-up", color: "bg-yellow-400" },
//         { text: "When They Ask", icon: "fa-solid fa-hand-paper", color: "bg-blue-400" },
//         { text: "I Like Playing Alone", icon: "fa-solid fa-user", color: "bg-purple-400" }
//       ]
//     }
//   ];

//   const handleAnswer = (answer: string) => {
//     const newAnswers = [...answers, answer];
//     setAnswers(newAnswers);

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       // Quiz completed, navigate to results
//       navigate('/results');
//     }
//   };

//   return (
//     <div className="container mx-auto px-6 py-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Progress Bar */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-sm font-medium text-[#212121]">Question {currentQuestion + 1} of {questions.length}</span>
//             <span className="text-sm text-gray-500">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-3">
//             <div
//               className="bg-gradient-to-r from-[#FFC107] to-[#FF9800] h-3 rounded-full transition-all duration-500"
//               style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* Question Card */}
//         <div className="bg-white rounded-3xl p-8 shadow-xl mb-8 border-4 border-[#FFC107]/30">
//           <div className="text-center mb-8">
//             <div className="w-20 h-20 bg-gradient-to-br from-[#FFC107] to-[#FF9800] rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce">
//               <span className="text-3xl">🌟</span>
//             </div>
//             <h2 className="text-3xl font-bold text-[#212121] mb-4">
//               {questions[currentQuestion].question}
//             </h2>
//             <p className="text-gray-600">Choose the one that feels right for you!</p>
//           </div>

//           {/* Answer Options */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {questions[currentQuestion].options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleAnswer(option.text)}
//                 className={`${option.color} text-white rounded-2xl p-6 hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl group`}
//               >
//                 <div className="flex flex-col items-center gap-3">
//                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
//                     <i className={`${option.icon} text-2xl`}></i>
//                   </div>
//                   <span className="text-lg font-semibold">{option.text}</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Fun Elements */}
//         <div className="flex justify-center gap-4">
//           {[...Array(questions.length)].map((_, index) => (
//             <div
//               key={index}
//               className={`w-4 h-4 rounded-full transition-all duration-300 ${
//                 index <= currentQuestion ? 'bg-[#FFC107]' : 'bg-gray-300'
//               } ${index === currentQuestion ? 'scale-125 animate-pulse' : ''}`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz6to8;

// import React, { useState } from "react";
// import { useQuiz } from "@/services/useQuiz";
// import { useLocation, useNavigate } from "react-router-dom";

// const Quiz6to8 = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const quizData = state?.quizData;
//   const sessionId = "anon-1234";

//   const { currentQuestion, question, handleAnswer, totalQuestions } = useQuiz(
//     quizData,
//     sessionId,
//     (finalAnswers) => {
//       navigate("/results", { state: { finalAnswers } });
//     }
//   );

//   return (
//     <div className="container mx-auto px-6 py-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Progress Bar */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-sm font-medium text-[#212121]">
//               Question {currentQuestion + 1} of {question.length}
//             </span>
//             <span className="text-sm text-gray-500">
//               {Math.round(((currentQuestion + 1) / question.length) * 100)}%
//             </span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-3">
//             <div
//               className="bg-gradient-to-r from-[#FFC107] to-[#FF9800] h-3 rounded-full transition-all duration-500"
//               style={{
//                 width: `${((currentQuestion + 1) / question.length) * 100}%`,
//               }}
//             ></div>
//           </div>
//         </div>

//         {/* Question Card */}
//         <div className="bg-white rounded-3xl p-8 shadow-xl mb-8 border-4 border-[#FFC107]/30">
//           <div className="text-center mb-8">
//             <div className="w-20 h-20 bg-gradient-to-br from-[#FFC107] to-[#FF9800] rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce">
//               <span className="text-3xl">🌟</span>
//             </div>
//             <h2 className="text-3xl font-bold text-[#212121] mb-4">
//               {question.question}
//             </h2>
//             <p className="text-gray-600">
//               Choose the one that feels right for you!
//             </p>
//           </div>

//           {/* Answer Options */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {question.options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleAnswer(option.text)}
//                 className={`${option.color} text-white rounded-2xl p-6 hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl group`}
//               >
//                 <div className="flex flex-col items-center gap-3">
//                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
//                     <i className={`${option.icon} text-2xl`}></i>
//                   </div>
//                   <span className="text-lg font-semibold">{option.text}</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Fun Elements */}
//         <div className="flex justify-center gap-4">
//           {[...Array(question.length)].map((_, index) => (
//             <div
//               key={index}
//               className={`w-4 h-4 rounded-full transition-all duration-300 ${
//                 index <= currentQuestion ? "bg-[#FFC107]" : "bg-gray-300"
//               } ${index === currentQuestion ? "scale-125 animate-pulse" : ""}`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz6to8;

// Quiz6to8.tsx - Age-specific UI for 6-8 year olds
import React, { useState } from "react";

interface Quiz6to8Props {
  quiz: any;
  onAnswer: (phaseIndex: number, questionIndex: number, answer: string) => void;
  onSubmit: () => void;
  answers: any[];
}

const Quiz6to8: React.FC<Quiz6to8Props> = ({
  quiz,
  onAnswer,
  onSubmit,
  answers,
}) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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

  const handleAnswerClick = (answer: string) => {
    onAnswer(currentPhase, currentQuestion, answer);

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
  };

  // Create colorful options for kids
  const getOptionStyle = (index: number) => {
    const colors = [
      "bg-pink-400 hover:bg-pink-500",
      "bg-yellow-400 hover:bg-yellow-500",
      "bg-blue-400 hover:bg-blue-500",
      "bg-green-400 hover:bg-green-500",
      "bg-purple-400 hover:bg-purple-500",
      "bg-orange-400 hover:bg-orange-500",
    ];
    return colors[index % colors.length];
  };

  const getOptionIcon = (index: number) => {
    const icons = [
      "fa-solid fa-star",
      "fa-solid fa-heart",
      "fa-solid fa-sun",
      "fa-solid fa-rainbow",
      "fa-solid fa-rocket",
      "fa-solid fa-smile",
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[#212121]">
              Question {currentQuestionNumber} of {totalQuestions}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round((currentQuestionNumber / totalQuestions) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-[#FFC107] to-[#FF9800] h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(currentQuestionNumber / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Phase Banner */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC107] to-[#FF9800] text-white rounded-full px-6 py-2 text-sm font-semibold">
            <span className="animate-bounce">🌟</span>
            {currentPhaseData.name}
            <span className="animate-bounce">🌟</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8 border-4 border-[#FFC107]/30">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FFC107] to-[#FF9800] rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce">
              <span className="text-3xl">🤔</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#212121] mb-4">
              {currentQuestionData.text}
            </h2>
            <p className="text-gray-600">
              Choose the one that feels right for you!
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestionData.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                className={`${getOptionStyle(
                  index
                )} text-white rounded-2xl p-6 hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl group`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <i className={`${getOptionIcon(index)} text-2xl`}></i>
                  </div>
                  <span className="text-lg font-semibold text-center">
                    {answer}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Fun Break Display */}
        {currentPhaseData.funBreak && (
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-dashed border-purple-300">
              <div className="text-2xl mb-2">🎉</div>
              <p className="text-purple-700 font-medium italic">
                {currentPhaseData.funBreak}
              </p>
            </div>
          </div>
        )}

        {/* Progress Dots */}
        <div className="flex justify-center gap-4">
          {[...Array(totalQuestions)].map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index < currentQuestionNumber ? "bg-[#FFC107]" : "bg-gray-300"
              } ${
                index === currentQuestionNumber - 1
                  ? "scale-125 animate-pulse"
                  : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz6to8;
