// import React from "react";
// import Header from "../components/Header";

// const Results = () => {
//   return (
//     <div className="min-h-screen bg-[#F5F7FA]">
//       <Header />
//       <main>
//         {/* Quiz Results Summary */}
//         <div className="container mx-auto px-6 py-12">
//           <div className="max-w-4xl mx-auto">
//             {/* Results Header */}
//             <div className="text-center mb-12 relative">
//               <div className="absolute -top-8 left-1/4 w-20 h-20 bg-[#FFC107]/20 rounded-full blur-xl animate-pulse"></div>
//               <div className="absolute top-4 right-1/3 w-16 h-16 bg-[#FF4081]/20 rounded-full blur-lg animate-bounce"></div>

//               <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
//                 <i className="fa-solid fa-trophy text-[#FFC107] text-2xl animate-bounce"></i>
//                 <span className="text-[#212121] font-semibold">
//                   Quiz Complete!
//                 </span>
//                 <i className="fa-solid fa-star text-[#FF4081] text-xl animate-spin"></i>
//               </div>

//               <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4">
//                 Amazing Work, Emma!
//                 <span className="text-[#1A73E8]">🎉</span>
//               </h1>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//                 You've discovered some incredible superpowers! Here's what we
//                 learned about you.
//               </p>
//             </div>

//             {/* Superpower Discovery */}
//             <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 mb-8 shadow-lg">
//               <div className="text-center mb-8">
//                 <div className="w-24 h-24 bg-gradient-to-br from-[#FFC107] to-[#FF9800] rounded-full mx-auto mb-6 flex items-center justify-center">
//                   <i className="fa-solid fa-magic-wand-sparkles text-white text-3xl animate-pulse"></i>
//                 </div>
//                 <h2 className="text-3xl font-bold text-[#212121] mb-3">
//                   Your Superpower Profile
//                 </h2>
//                 <p className="text-[#1A73E8] font-semibold text-lg">
//                   Creative Explorer with Leadership Spark ✨
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-white rounded-xl p-6 text-center shadow-sm">
//                   <div className="w-16 h-16 bg-[#FF4081]/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <i className="fa-solid fa-palette text-[#FF4081] text-2xl"></i>
//                   </div>
//                   <h3 className="text-lg font-semibold text-[#212121] mb-2">
//                     Creative Genius
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     You love making beautiful things and thinking outside the
//                     box!
//                   </p>
//                 </div>

//                 <div className="bg-white rounded-xl p-6 text-center shadow-sm">
//                   <div className="w-16 h-16 bg-[#4CAF50]/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <i className="fa-solid fa-users text-[#4CAF50] text-2xl"></i>
//                   </div>
//                   <h3 className="text-lg font-semibold text-[#212121] mb-2">
//                     Team Helper
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     You're amazing at working with others and helping friends!
//                   </p>
//                 </div>

//                 <div className="bg-white rounded-xl p-6 text-center shadow-sm">
//                   <div className="w-16 h-16 bg-[#1A73E8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <i className="fa-solid fa-lightbulb text-[#1A73E8] text-2xl"></i>
//                   </div>
//                   <h3 className="text-lg font-semibold text-[#212121] mb-2">
//                     Problem Solver
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     You never give up and always find clever solutions!
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Response Summary */}
//             <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
//               <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
//                 <i className="fa-solid fa-list-check text-[#1A73E8]"></i>
//                 Your Quiz Responses
//               </h2>

//               <div className="space-y-4">
//                 {[
//                   {
//                     question: "Favorite Saturday Activity",
//                     answer: "Draw and Create Art",
//                     icon: "fa-solid fa-palette",
//                     color: "text-[#FF4081]",
//                   },
//                   {
//                     question: "Learning Style",
//                     answer: "Working with Friends",
//                     icon: "fa-solid fa-users",
//                     color: "text-[#4CAF50]",
//                   },
//                   {
//                     question: "Problem Solving",
//                     answer: "Try Different Solutions",
//                     icon: "fa-solid fa-lightbulb",
//                     color: "text-[#FFC107]",
//                   },
//                   {
//                     question: "Future Dreams",
//                     answer: "Design Amazing Things",
//                     icon: "fa-solid fa-rocket",
//                     color: "text-[#9C27B0]",
//                   },
//                   {
//                     question: "Helping Others",
//                     answer: "Love Helping Friends",
//                     icon: "fa-solid fa-heart",
//                     color: "text-[#FF4081]",
//                   },
//                 ].map((item, index) => (
//                   <div key={index} className="bg-[#F5F7FA] rounded-xl p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-[#212121] font-medium">
//                         {item.question}
//                       </span>
//                       <span className="text-[#1A73E8] text-sm">
//                         Question {index + 1}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <i className={`${item.icon} ${item.color}`}></i>
//                       <span className="text-gray-700">{item.answer}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* AI Recommendations */}
//               <div className="bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] rounded-2xl p-8 text-white relative overflow-hidden">
//                 <div className="absolute top-4 right-4 opacity-20">
//                   <i className="fa-solid fa-robot text-6xl"></i>
//                 </div>

//                 <div className="relative z-10">
//                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
//                     <i className="fa-solid fa-magic-wand-sparkles text-white text-2xl"></i>
//                   </div>

//                   <h3 className="text-2xl font-bold mb-3">
//                     Get AI Recommendations
//                   </h3>
//                   <p className="text-blue-100 mb-6 text-sm leading-relaxed">
//                     Let our AI suggest fun activities, learning paths, and
//                     career ideas based on your superpowers!
//                   </p>

//                   <button className="w-full bg-white text-[#1A73E8] rounded-full py-3 px-6 font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
//                     <i className="fa-solid fa-sparkles"></i>
//                     Get My Recommendations
//                   </button>
//                 </div>
//               </div>

//               {/* Chat with AI Advisor */}
//               <div className="bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-2xl p-8 text-white relative overflow-hidden">
//                 <div className="absolute top-4 right-4 opacity-20">
//                   <i className="fa-solid fa-comments text-6xl"></i>
//                 </div>

//                 <div className="relative z-10">
//                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
//                     <i className="fa-solid fa-user-astronaut text-white text-2xl"></i>
//                   </div>

//                   <h3 className="text-2xl font-bold mb-3">
//                     Chat with AI Advisor
//                   </h3>
//                   <p className="text-green-100 mb-6 text-sm leading-relaxed">
//                     Ask questions about your results, explore career paths, or
//                     get advice from our friendly AI mentor!
//                   </p>

//                   <button className="w-full bg-white text-[#4CAF50] rounded-full py-3 px-6 font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
//                     <i className="fa-solid fa-comment-dots"></i>
//                     Start Chatting
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Achievement Badge */}
//             <div className="text-center mt-12">
//               <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FFC107] to-[#FF9800] text-white rounded-full px-8 py-4 shadow-lg">
//                 <i className="fa-solid fa-medal text-2xl animate-bounce"></i>
//                 <div>
//                   <p className="font-bold text-lg">Achievement Unlocked!</p>
//                   <p className="text-sm opacity-90">
//                     Quiz Explorer Badge Earned
//                   </p>
//                 </div>
//                 <i className="fa-solid fa-star text-2xl animate-spin"></i>
//               </div>
//             </div>

//             {/* Share Results */}
//             <div className="bg-white rounded-2xl p-6 mt-8 shadow-lg">
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-[#212121] mb-4">
//                   Share Your Superpowers! 🌟
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   Let your friends and family know about your amazing
//                   discoveries!
//                 </p>

//                 <div className="flex justify-center gap-4">
//                   <button className="bg-[#1A73E8] text-white rounded-full px-6 py-2 text-sm hover:bg-[#1557B0] transition-all flex items-center gap-2">
//                     <i className="fa-solid fa-share"></i>
//                     Share Results
//                   </button>
//                   <button className="bg-[#4CAF50] text-white rounded-full px-6 py-2 text-sm hover:bg-[#388E3C] transition-all flex items-center gap-2">
//                     <i className="fa-solid fa-download"></i>
//                     Save Certificate
//                   </button>
//                   <button className="bg-[#FF4081] text-white rounded-full px-6 py-2 text-sm hover:bg-[#E91E63] transition-all flex items-center gap-2">
//                     <i className="fa-solid fa-redo"></i>
//                     Retake Quiz
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Results;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

interface Answer {
  phaseIndex: number;
  questionIndex: number;
  answer: string;
}

interface ResultsData {
  analysis: string;
  quizId: string;
  answers: Answer[];
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [resultsData, setResultsData] = useState<ResultsData | null>(null);
  const [userName] = useState("Champion"); // This could come from user context

  useEffect(() => {
    // Get results data from navigation state or fetch from API
    if (location.state) {
      const { answers, quizId, ageRange } = location.state;

      // If we have the analysis data already
      if (location.state.analysis) {
        setResultsData(location.state);
      } else {
        // Fetch results data using quizId (if needed)
        fetchResultsData(quizId);
      }
    } else {
      // No data available, redirect back
      navigate("/");
    }
  }, [location.state, navigate]);

  const fetchResultsData = async (quizId: string) => {
    try {
      // This would be your API call to get results
      // const response = await axios.get(`${apiUrl}/ai/guest/quiz/results/${quizId}`);
      // setResultsData(response.data);

      // For now, if no data is available, redirect
      navigate("/");
    } catch (error) {
      console.error("Failed to fetch results:", error);
      navigate("/");
    }
  };

  const parseAnalysisToProfile = (analysis: string) => {
    // Extract profile section from analysis
    const profileMatch = analysis.match(/Profile:\n(.*?)\n\nRecommendations:/s);
    return profileMatch ? profileMatch[1].trim() : analysis;
  };

  const parseRecommendations = (analysis: string) => {
    // Extract recommendations from analysis
    const recMatch = analysis.match(/Recommendations:\n(.*)/s);
    if (recMatch) {
      return recMatch[1]
        .split("\n")
        .filter((line) => line.trim() && line.match(/^\d+\./))
        .map((line) => line.replace(/^\d+\.\s*/, "").trim());
    }
    return [];
  };

  const generateSuperpowers = (answers: Answer[]) => {
    const answerValues = answers.map((a) => a.answer.toLowerCase());
    const superpowers = [];

    // Analyze answers to determine superpowers
    if (
      answerValues.some(
        (val) => val.includes("leadership") || val.includes("lead")
      )
    ) {
      superpowers.push({
        title: "Natural Leader",
        description:
          "You have amazing leadership qualities and inspire others!",
        icon: "fa-solid fa-crown",
        color: "text-[#FFC107]",
      });
    }

    if (
      answerValues.some(
        (val) => val.includes("sports") || val.includes("athletic")
      )
    ) {
      superpowers.push({
        title: "Athletic Champion",
        description: "You excel in sports and physical activities!",
        icon: "fa-solid fa-medal",
        color: "text-[#FF4081]",
      });
    }

    if (
      answerValues.some(
        (val) =>
          val.includes("english") ||
          val.includes("writing") ||
          val.includes("communication")
      )
    ) {
      superpowers.push({
        title: "Communication Master",
        description: "You have exceptional language and communication skills!",
        icon: "fa-solid fa-comment",
        color: "text-[#1A73E8]",
      });
    }

    if (
      answerValues.some(
        (val) => val.includes("technology") || val.includes("tech")
      )
    ) {
      superpowers.push({
        title: "Tech Innovator",
        description: "You have a passion for technology and innovation!",
        icon: "fa-solid fa-laptop-code",
        color: "text-[#4CAF50]",
      });
    }

    if (
      answerValues.some(
        (val) => val.includes("independent") || val.includes("solo")
      )
    ) {
      superpowers.push({
        title: "Independent Thinker",
        description: "You work excellently on your own and think creatively!",
        icon: "fa-solid fa-lightbulb",
        color: "text-[#9C27B0]",
      });
    }

    if (
      answerValues.some(
        (val) => val.includes("difference") || val.includes("impact")
      )
    ) {
      superpowers.push({
        title: "World Changer",
        description: "You're driven to make a positive impact on the world!",
        icon: "fa-solid fa-globe",
        color: "text-[#FF5722]",
      });
    }

    // Default superpowers if none detected
    if (superpowers.length === 0) {
      superpowers.push(
        {
          title: "Creative Explorer",
          description: "You love exploring new ideas and thinking creatively!",
          icon: "fa-solid fa-palette",
          color: "text-[#FF4081]",
        },
        {
          title: "Problem Solver",
          description: "You never give up and always find clever solutions!",
          icon: "fa-solid fa-puzzle-piece",
          color: "text-[#1A73E8]",
        }
      );
    }

    return superpowers.slice(0, 3); // Return max 3 superpowers
  };

  const formatAnswerForDisplay = (answer: Answer, index: number) => {
    const icons = [
      "fa-solid fa-star",
      "fa-solid fa-heart",
      "fa-solid fa-lightbulb",
      "fa-solid fa-rocket",
      "fa-solid fa-trophy",
      "fa-solid fa-magic-wand-sparkles",
      "fa-solid fa-crown",
      "fa-solid fa-medal",
    ];

    const colors = [
      "text-[#FF4081]",
      "text-[#4CAF50]",
      "text-[#FFC107]",
      "text-[#9C27B0]",
      "text-[#FF5722]",
      "text-[#1A73E8]",
      "text-[#795548]",
      "text-[#607D8B]",
    ];

    return {
      question: `Phase ${answer.phaseIndex + 1}, Question ${
        answer.questionIndex + 1
      }`,
      answer: answer.answer,
      icon: icons[index % icons.length],
      color: colors[index % colors.length],
    };
  };

  if (!resultsData) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A73E8] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  const profileText = parseAnalysisToProfile(resultsData.analysis);
  const recommendations = parseRecommendations(resultsData.analysis);
  const superpowers = generateSuperpowers(resultsData.answers);

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />
      <main>
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12 relative">
              <div className="absolute -top-8 left-1/4 w-20 h-20 bg-[#FFC107]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-4 right-1/3 w-16 h-16 bg-[#FF4081]/20 rounded-full blur-lg animate-bounce"></div>

              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
                <i className="fa-solid fa-trophy text-[#FFC107] text-2xl animate-bounce"></i>
                <span className="text-gray-800/90 font-semibold">
                  Quiz Complete!
                </span>
                <i className="fa-solid fa-star text-[#FF4081] text-xl animate-spin"></i>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-800/90 mb-4">
                Amazing Work, {userName}!
                <span className="text-[#1A73E8]">🎉</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                You've discovered some incredible superpowers! Here's what we
                learned about you.
              </p>
            </div>

            {/* AI Analysis */}
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#9C27B0] to-[#673AB7] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="fa-solid fa-brain text-white text-3xl animate-pulse"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800/90 mb-3">
                  AI Analysis
                </h2>
                <p className="text-[#9C27B0] font-semibold text-lg">
                  Your Personalized Profile
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                <p className="text-gray-600 leading-8">{profileText}</p>
              </div>
            </div>

            {/* Superpower Discovery */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FFC107] to-[#FF9800] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="fa-solid fa-magic-wand-sparkles text-white text-3xl animate-pulse"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800/90 mb-3">
                  Your Superpower Profile
                </h2>
                <p className="text-[#1A73E8] font-semibold text-lg">
                  {superpowers.map((sp) => sp.title).join(" • ")} ✨
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {superpowers.map((superpower, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 text-center shadow-sm"
                  >
                    <div
                      className={`w-16 h-16 bg-current/20 rounded-full flex items-center justify-center mx-auto mb-4 ${superpower.color.replace(
                        "text-",
                        "text-"
                      )}`}
                    >
                      <i
                        className={`${superpower.icon} ${superpower.color} text-2xl`}
                      ></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800/90 mb-2">
                      {superpower.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {superpower.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Recommendations */}
            {recommendations.length > 0 && (
              <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 mb-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="fa-solid fa-lightbulb text-white text-2xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-[#212121] mb-2">
                    AI Recommendations
                  </h2>
                  <p className="text-gray-600">
                    Personalized suggestions based on your responses
                  </p>
                </div>

                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm flex items-start gap-4"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Response Summary */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
                <i className="fa-solid fa-list-check text-[#1A73E8]"></i>
                Your Quiz Responses
              </h2>

              <div className="space-y-4">
                {resultsData.answers.map((answer, index) => {
                  const displayData = formatAnswerForDisplay(answer, index);
                  return (
                    <div key={index} className="bg-[#F5F7FA] rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#212121] font-medium">
                          {displayData.question}
                        </span>
                        <span className="text-[#1A73E8] text-sm">
                          Response {index + 1}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <i
                          className={`${displayData.icon} ${displayData.color}`}
                        ></i>
                        <span className="text-gray-700">
                          {displayData.answer}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20">
                  <i className="fa-solid fa-robot text-6xl"></i>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <i className="fa-solid fa-magic-wand-sparkles text-white text-2xl"></i>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-center">
                    Get Career Recommendations
                  </h3>
                  <p className="text-blue-100 mb-6 text-sm text-center leading-relaxed">
                    Explore deeper recommendations and personalized learning
                    paths!
                  </p>

                  <button
                    onClick={() => navigate("/career-recommendations")}
                    className="w-full bg-white text-[#1A73E8] rounded-full py-3 px-6 font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-sparkles"></i>
                    Explore More
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-2xl p-8 text-white relative overflow-hidden hidden">
                <div className="absolute top-4 right-4 opacity-20">
                  <i className="fa-solid fa-comments text-6xl"></i>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <i className="fa-solid fa-user-astronaut text-white text-2xl"></i>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    Chat with AI Advisor
                  </h3>
                  <p className="text-green-100 mb-6 text-sm leading-relaxed">
                    Ask questions about your results or get personalized advice!
                  </p>

                  <button className="w-full bg-white text-[#4CAF50] rounded-full py-3 px-6 font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                    <i className="fa-solid fa-comment-dots"></i>
                    Start Chatting
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="text-center mt-12 hidden">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FFC107] to-[#FF9800] text-white rounded-full px-8 py-4 shadow-lg">
                <i className="fa-solid fa-medal text-2xl animate-bounce"></i>
                <div>
                  <p className="font-bold text-lg">Achievement Unlocked!</p>
                  <p className="text-sm opacity-90">
                    Quiz Explorer Badge Earned
                  </p>
                </div>
                <i className="fa-solid fa-star text-2xl animate-spin"></i>
              </div>
            </div>

            {/* Share Results */}
            <div className="bg-white rounded-2xl p-6 mt-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800/90 mb-4">
                  Share Your Results! 🌟
                </h3>
                <p className="text-gray-500 mb-6">
                  Let your friends and family know about your amazing
                  discoveries!
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <button className="bg-[#1A73E8] text-white rounded-full px-6 py-2 text-sm hover:bg-[#1557B0] transition-all flex items-center gap-2">
                    <i className="fa-solid fa-share"></i>
                    Share Results
                  </button>
                  <button className="bg-[#4CAF50] text-white rounded-full px-6 py-2 text-sm hover:bg-[#388E3C] transition-all flex items-center gap-2">
                    <i className="fa-solid fa-download"></i>
                    Save Certificate
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    className="bg-[#FF4081] text-white rounded-full px-6 py-2 text-sm hover:bg-[#E91E63] transition-all flex items-center gap-2"
                  >
                    <i className="fa-solid fa-redo"></i>
                    Take Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
