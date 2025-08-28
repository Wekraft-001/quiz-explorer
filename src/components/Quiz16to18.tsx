// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Quiz16to17 = () => {
//   const navigate = useNavigate();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState<string[]>([]);

//   const questions = [
//     {
//       id: 1,
//       question: "What drives your decision-making process?",
//       context: "Career Assessment",
//       options: [
//         {
//           text: "Data-driven analysis and logical reasoning",
//           value: "analytical",
//           description: "I prefer to make decisions based on thorough research and objective evidence."
//         },
//         {
//           text: "Intuition and personal values alignment",
//           value: "intuitive",
//           description: "I trust my instincts and ensure decisions align with my core beliefs."
//         },
//         {
//           text: "Potential for innovation and creativity",
//           value: "creative",
//           description: "I'm drawn to opportunities that allow for original thinking and novel solutions."
//         },
//         {
//           text: "Social impact and collaborative outcomes",
//           value: "social",
//           description: "I prioritize decisions that benefit others and involve working with people."
//         }
//       ]
//     },
//     {
//       id: 2,
//       question: "How do you approach long-term goal setting?",
//       context: "Strategic Planning",
//       options: [
//         {
//           text: "Create detailed roadmaps with measurable milestones",
//           value: "structured",
//           description: "I develop comprehensive plans with clear metrics and timelines."
//         },
//         {
//           text: "Set ambitious visions and adapt flexibly",
//           value: "adaptive",
//           description: "I aim high and adjust my approach based on changing circumstances."
//         },
//         {
//           text: "Focus on continuous learning and skill development",
//           value: "learning",
//           description: "I prioritize growth opportunities and knowledge acquisition."
//         },
//         {
//           text: "Balance multiple priorities and stakeholder needs",
//           value: "balanced",
//           description: "I consider various perspectives and maintain equilibrium across goals."
//         }
//       ]
//     },
//     {
//       id: 3,
//       question: "What type of challenges energize you most?",
//       context: "Work Preferences",
//       options: [
//         {
//           text: "Complex technical problems requiring expertise",
//           value: "technical",
//           description: "I thrive on solving intricate problems that demand deep knowledge."
//         },
//         {
//           text: "Interpersonal situations requiring emotional intelligence",
//           value: "interpersonal",
//           description: "I excel in managing relationships and understanding human dynamics."
//         },
//         {
//           text: "Strategic decisions with significant impact",
//           value: "strategic",
//           description: "I'm energized by high-stakes decisions that shape outcomes."
//         },
//         {
//           text: "Creative projects with open-ended possibilities",
//           value: "creative",
//           description: "I love exploring uncharted territory and generating original ideas."
//         }
//       ]
//     },
//     {
//       id: 4,
//       question: "How do you define professional success?",
//       context: "Values Assessment",
//       options: [
//         {
//           text: "Expertise recognition and thought leadership",
//           value: "expertise",
//           description: "Being acknowledged as an authority in my field of specialization."
//         },
//         {
//           text: "Positive impact on community and society",
//           value: "impact",
//           description: "Contributing meaningfully to causes larger than myself."
//         },
//         {
//           text: "Innovation and breakthrough achievements",
//           value: "innovation",
//           description: "Creating something new that advances knowledge or capabilities."
//         },
//         {
//           text: "Building and leading successful teams",
//           value: "leadership",
//           description: "Developing others and achieving collective goals through collaboration."
//         }
//       ]
//     },
//     {
//       id: 5,
//       question: "What learning style accelerates your growth?",
//       context: "Development Preferences",
//       options: [
//         {
//           text: "Independent research and self-directed study",
//           value: "independent",
//           description: "I learn best through autonomous exploration and individual investigation."
//         },
//         {
//           text: "Mentorship and expert guidance",
//           value: "guided",
//           description: "I benefit from experienced professionals sharing knowledge and insights."
//         },
//         {
//           text: "Hands-on experience and practical application",
//           value: "experiential",
//           description: "I learn most effectively by doing and applying concepts in real situations."
//         },
//         {
//           text: "Collaborative learning and peer interaction",
//           value: "collaborative",
//           description: "I thrive in environments where I can learn with and from others."
//         }
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
//           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white rounded-full px-8 py-4 shadow-lg mb-6">
//             <i className="fa-solid fa-crown text-2xl"></i>
//             <span className="font-bold text-lg">Visionary Achiever Assessment</span>
//             <i className="fa-solid fa-graduation-cap text-2xl"></i>
//           </div>
//           <p className="text-gray-600 max-w-2xl mx-auto">A comprehensive evaluation designed to identify your professional strengths and career pathway alignment.</p>
//         </div>

//         {/* Progress */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-3">
//             <div className="text-sm font-medium text-gray-600">
//               Assessment Progress
//             </div>
//             <div className="text-sm font-bold text-[#4CAF50]">
//               {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
//             </div>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//             <div
//               className="bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] h-3 rounded-full transition-all duration-700"
//               style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* Question Card */}
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">{currentQuestion + 1}</span>
//               </div>
//               <div>
//                 <div className="text-sm font-medium text-[#4CAF50] mb-1">
//                   {questions[currentQuestion].context}
//                 </div>
//                 <h2 className="text-xl font-bold text-[#212121]">
//                   {questions[currentQuestion].question}
//                 </h2>
//               </div>
//             </div>
//           </div>

//           {/* Options */}
//           <div className="p-8">
//             <div className="space-y-4">
//               {questions[currentQuestion].options.map((option, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleAnswer(option.text)}
//                   className="w-full text-left p-6 rounded-xl border-2 border-gray-100 hover:border-[#4CAF50]/50 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 group"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="w-8 h-8 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
//                       <span className="text-white font-bold text-sm">{String.fromCharCode(65 + index)}</span>
//                     </div>
//                     <div>
//                       <div className="text-[#212121] font-semibold text-lg mb-2">
//                         {option.text}
//                       </div>
//                       <div className="text-gray-600 text-sm leading-relaxed">
//                         {option.description}
//                       </div>
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Question Navigator */}
//         <div className="flex justify-center mt-8 gap-3">
//           {questions.map((_, index) => (
//             <div
//               key={index}
//               className={`w-4 h-4 rounded-full transition-all duration-500 ${
//                 index < currentQuestion
//                   ? 'bg-[#4CAF50] scale-110'
//                   : index === currentQuestion
//                   ? 'bg-[#4CAF50] scale-125 ring-4 ring-[#4CAF50]/30'
//                   : 'bg-gray-300'
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz16to17;

// Quiz16to17.tsx - Age-specific UI for 16-17 year olds
import React, { useState } from "react";

interface Quiz16to17Props {
  quiz: any;
  onAnswer: (phaseIndex: number, questionIndex: number, answer: string) => void;
  onSubmit: () => void;
  answers: any[];
}

const Quiz16to18: React.FC<Quiz16to17Props> = ({
  quiz,
  onAnswer,
  onSubmit,
  answers,
}) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showDescription, setShowDescription] = useState<string | null>(null);

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
    setShowDescription(answer);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      onAnswer(currentPhase, currentQuestion, selectedAnswer);
      setSelectedAnswer(null);
      setShowDescription(null);

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

  // Generate professional descriptions for answers
  const getAnswerDescription = (answer: string, index: number) => {
    // This would ideally come from your API data, but for now we'll generate contextual descriptions
    const descriptions = [
      "This approach emphasizes systematic thinking and evidence-based decision making.",
      "This reflects a values-driven methodology with emphasis on personal alignment.",
      "This indicates a forward-thinking perspective focused on breakthrough solutions.",
      "This demonstrates collaborative leadership and community-centered thinking.",
      "This shows strategic planning capabilities with focus on measurable outcomes.",
      "This reveals adaptive leadership skills with emphasis on flexibility.",
    ];
    return descriptions[index % descriptions.length];
  };

  const getContextualCategory = (phaseIndex: number) => {
    const categories = [
      "Career Assessment",
      "Strategic Planning",
      "Work Preferences",
      "Values Assessment",
      "Development Preferences",
    ];
    return categories[phaseIndex % categories.length];
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white rounded-full px-8 py-4 shadow-lg mb-6">
            <i className="fa-solid fa-crown text-2xl"></i>
            <span className="font-bold text-lg">{currentPhaseData.name}</span>
            <i className="fa-solid fa-graduation-cap text-2xl"></i>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive evaluation designed to identify your professional
            strengths and career pathway alignment.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-gray-600">
              Assessment Progress
            </div>
            <div className="text-sm font-bold text-[#4CAF50]">
              {Math.round((currentQuestionNumber / totalQuestions) * 100)}%
              Complete
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] h-3 rounded-full transition-all duration-700"
              style={{
                width: `${(currentQuestionNumber / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {currentQuestionNumber}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium text-[#4CAF50] mb-1">
                  {getContextualCategory(currentPhase)}
                </div>
                <h2 className="text-xl font-bold text-[#212121]">
                  {currentQuestionData.text}
                </h2>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="p-8">
            <div className="space-y-4">
              {currentQuestionData.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(answer)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 group ${
                    selectedAnswer === answer
                      ? "border-[#4CAF50] bg-gradient-to-r from-green-50 to-emerald-50"
                      : "border-gray-100 hover:border-[#4CAF50]/50 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                        selectedAnswer === answer
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    >
                      <span className="text-white font-bold text-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-[#212121] font-semibold text-lg mb-2">
                        {answer}
                      </div>
                      <div className="text-gray-600 text-sm leading-relaxed">
                        {getAnswerDescription(answer, index)}
                      </div>
                    </div>
                    {selectedAnswer === answer && (
                      <div className="flex-shrink-0">
                        <i className="fa-solid fa-check-circle text-[#4CAF50] text-2xl"></i>
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
                  className="bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  <i className="fa-solid fa-arrow-right mr-2"></i>
                  {currentQuestionNumber === totalQuestions
                    ? "Complete Assessment"
                    : "Continue Assessment"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Fun Break Display */}
        {currentPhaseData.funBreak && (
          <div className="text-center mb-8 mt-8">
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-dashed border-green-300">
              <div className="text-2xl mb-2">💡</div>
              <p className="text-green-700 font-medium italic">
                {currentPhaseData.funBreak}
              </p>
            </div>
          </div>
        )}

        {/* Question Navigator */}
        <div className="flex justify-center mt-8 gap-3">
          {[...Array(totalQuestions)].map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index < currentQuestionNumber - 1
                  ? "bg-[#4CAF50] scale-110"
                  : index === currentQuestionNumber - 1
                  ? "bg-[#4CAF50] scale-125 ring-4 ring-[#4CAF50]/30"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Phase Progress Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {quiz.phases.map((phase, index) => (
            <div
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                index < currentPhase
                  ? "bg-[#4CAF50] text-white"
                  : index === currentPhase
                  ? "bg-[#4CAF50]/20 text-[#4CAF50] ring-2 ring-[#4CAF50]/30"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              Phase {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz16to18;
