// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Header from '../components/Header';
// import Quiz6to8 from '../components/Quiz6to8';
// import Quiz9to12 from '../components/Quiz9to12';
// import Quiz13to15 from '../components/Quiz13to15';
// import Quiz16to17 from '../components/Quiz16to17';

// const Quiz = () => {
//   const { ageRange } = useParams<{ ageRange: string }>();

//   const renderQuiz = () => {
//     switch (ageRange) {
//       case '6-8':
//         return <Quiz6to8 />;
//       case '9-12':
//         return <Quiz9to12 />;
//       case '13-15':
//         return <Quiz13to15 />;
//       case '16-17':
//         return <Quiz16to17 />;
//       default:
//         return <div>Quiz not found</div>;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F7FA]">
//       <Header />
//       <main>
//         {renderQuiz()}
//       </main>
//     </div>
//   );
// };

// export default Quiz;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import Header from "../components/Header";
// import { fetchQuiz, submitQuiz } from "../services/quizService";
// import Quiz6to8 from "../components/Quiz6to8";
// import Quiz9to12 from "../components/Quiz9to12";
// import Quiz13to15 from "../components/Quiz13to15";
// import Quiz16to17 from "../components/Quiz16to17";
// import axios from "axios";

// const Quiz = () => {
//   const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
//   const { ageRange } = useParams<{ ageRange: string }>();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { quizData } = location.state || {};
//   // const [quizData, setQuizData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [answers, setAnswers] = useState([]);
//   const sessionId = "anon-1234"; // in real app, generate/store in localStorage

//   if (!quizData) {
//     return <p>No quiz loaded. Please go back and select an age group.</p>;
//   }

//   const { quizId, quiz } = quizData;

//   const handleAnswer = (
//     phaseIndex: number,
//     questionIndex: number,
//     answer: string
//   ) => {
//     setAnswers((prev) => {
//       const updated = prev.filter(
//         (a) =>
//           !(a.phaseIndex === phaseIndex && a.questionIndex === questionIndex)
//       );
//       return [...updated, { phaseIndex, questionIndex, answer }];
//     });
//   };
//   const handleSubmit = async () => {
//     try {
//       await axios.post(`${apiUrl}/ai/guest/quiz/submit`, {
//         sessionId: "anon-1234", // replace with real session later
//         quizId,
//         answers,
//       });

//       navigate("/results");
//     } catch (err) {
//       console.error("❌ Failed to submit answers", err);
//     }
//   };

//   const renderQuiz = () => {
//     if (!quizData) return <div>No quiz data found</div>;

//     const props = { quiz: quizData.quiz, onSubmit: handleSubmit };

//     switch (ageRange) {
//       case "6-8":
//         return <Quiz6to8 {...props} />;
//       case "9-12":
//       // return <Quiz9to12 {...props} />;
//       case "13-15":
//       // return <Quiz13to15 {...props} />;
//       case "16-17":
//       // return <Quiz16to17 {...props} />;
//       default:
//         return <div>Quiz not found</div>;
//     }
//   };

//   return (
//     // <div className="min-h-screen bg-[#F5F7FA]">
//     //   <Header />
//     //   <main>{loading ? <p>Loading quiz...</p> : renderQuiz()}</main>
//     // </div>
//     <div className="p-6">
//       {quiz.phases.map((phase: any, phaseIndex: number) => (
//         <div key={phaseIndex} className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">{phase.name}</h2>
//           {phase.questions.map((q: any, questionIndex: number) => (
//             <div key={questionIndex} className="mb-6">
//               <p className="font-semibold">{q.text}</p>
//               <div className="mt-2 flex flex-wrap gap-3">
//                 {q.answers.map((ans: string, idx: number) => (
//                   <button
//                     key={idx}
//                     onClick={() => handleAnswer(phaseIndex, questionIndex, ans)}
//                     className="px-4 py-2 border rounded-lg hover:bg-blue-100"
//                   >
//                     {ans}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//           <p className="italic text-gray-500">{phase.funBreak}</p>
//         </div>
//       ))}

//       <button
//         onClick={handleSubmit}
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg"
//       >
//         Submit Quiz
//       </button>
//     </div>
//   );
// };

// export default Quiz;

// Quiz.tsx - Main Quiz Page
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Quiz6to8 from "../components/Quiz6to8";
import Quiz9to12 from "../components/Quiz9to12";
import Quiz13to15 from "../components/Quiz13to15";
import Quiz16to18 from "../components/Quiz16to18";
import axios from "axios";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quizData } = location.state || {};
  const [answers, setAnswers] = useState([]);
  const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

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

  const handleAnswer = (
    phaseIndex: number,
    questionIndex: number,
    answer: string
  ) => {
    setAnswers((prev) => {
      const updated = prev.filter(
        (a) =>
          !(a.phaseIndex === phaseIndex && a.questionIndex === questionIndex)
      );
      return [...updated, { phaseIndex, questionIndex, answer }];
    });
  };

  // const handleSubmit = async () => {
  //   try {
  //     await axios.post(`${apiUrl}/ai/guest/quiz/submit`, {
  //       sessionId: "anon-1234",
  //       quizId,
  //       answers,
  //     });
  //     navigate("/results", { state: { answers, quizId, ageRange } });
  //   } catch (err) {
  //     console.error("❌ Failed to submit answers", err);
  //   }
  // };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${apiUrl}/ai/guest/quiz/submit`, {
        sessionId: "guest-123",
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
