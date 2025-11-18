import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

interface AIAnalysis {
  explanation: string;
  skills: string;
  activities: string;
  encouragement: string;
}

interface Analysis {
  ageRange: string;
  aiAnalysis: AIAnalysis;
  analysisDate: string;
  scores: Record<string, number>;
  topCareerAreas: string[];
}

interface QuizDetails {
  id: string;
  questions: number;
  submittedAt: string;
  ageRange: string;
  createdAt: string;
}

interface Video {
  title: string;
  url: string;
  description?: string;
}

// interface Book {
//   title: string;
//   description?: string;
// }

// interface Game {
//   title: string;
//   description?: string;
// }

// interface Resource {
//   title: string;
//   url?: string;
//   description?: string;
// }

// interface EducationalContent {
//   videos: Video[];
//   books: Book[];
//   games: Game[];
//   resources: Resource[];
// }

interface ResultsData {
  message: string;
  analysis: Analysis;
  quizDetails: QuizDetails;
  // educationalContent: EducationalContent;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [resultsData, setResultsData] = useState<ResultsData | null>(null);
  const [userName] = useState("Champion");

  useEffect(() => {
    if (location.state) {
      // The API response comes in location.state
      setResultsData(location.state as ResultsData);
    } else {
      navigate("/");
    }
  }, [location.state, navigate]);

  const generateSuperpowers = (topCareerAreas: string[]) => {
    const superpowerMap: Record<string, any> = {
      Art: {
        title: "Creative Artist",
        description: "You have amazing creativity and artistic vision!",
        icon: "fa-solid fa-palette",
        color: "text-[#FF4081]",
      },
      Science: {
        title: "Science Explorer",
        description: "You love discovering how things work!",
        icon: "fa-solid fa-flask",
        color: "text-[#4CAF50]",
      },
      Technology: {
        title: "Tech Innovator",
        description: "You have a passion for technology and innovation!",
        icon: "fa-solid fa-laptop-code",
        color: "text-[#1A73E8]",
      },
      Nature: {
        title: "Nature Lover",
        description: "You connect deeply with the natural world!",
        icon: "fa-solid fa-leaf",
        color: "text-[#4CAF50]",
      },
      Communication: {
        title: "Communication Master",
        description: "You have exceptional communication skills!",
        icon: "fa-solid fa-comment",
        color: "text-[#9C27B0]",
      },
      Leadership: {
        title: "Natural Leader",
        description: "You inspire and guide others naturally!",
        icon: "fa-solid fa-crown",
        color: "text-[#FFC107]",
      },
      Sports: {
        title: "Athletic Champion",
        description: "You excel in physical activities and sports!",
        icon: "fa-solid fa-medal",
        color: "text-[#FF5722]",
      },
    };

    return topCareerAreas.slice(0, 3).map(
      (area) =>
        superpowerMap[area] || {
          title: `${area} Expert`,
          description: `You show great potential in ${area}!`,
          icon: "fa-solid fa-star",
          color: "text-[#1A73E8]",
        }
    );
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

  const { analysis } = resultsData;
  const superpowers = generateSuperpowers(analysis.topCareerAreas);

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

            {/* AI Analysis - Explanation */}
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
                <p className="text-gray-600 leading-8">
                  {analysis.aiAnalysis.explanation}
                </p>
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
                      className={`w-16 h-16 bg-current/20 rounded-full flex items-center justify-center mx-auto mb-4 ${superpower.color}`}
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

            {/* Skills to Develop */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fa-solid fa-lightbulb text-white text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#212121] mb-2">
                  Skills to Develop
                </h2>
                <p className="text-gray-600">
                  Build these skills to grow your talents
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  {analysis.aiAnalysis.skills}
                </p>
              </div>
            </div>

            {/* Recommended Activities */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF9800] to-[#F57C00] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fa-solid fa-rocket text-white text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#212121] mb-2">
                  Fun Activities
                </h2>
                <p className="text-gray-600">
                  Try these activities to explore your interests
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  {analysis.aiAnalysis.activities}
                </p>
              </div>
            </div>

            {/* Encouragement */}
            <div className="bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] rounded-2xl p-8 mb-8 shadow-lg text-white">
              <div className="text-center">
                <i className="fa-solid fa-heart text-5xl mb-4 animate-pulse"></i>
                <h2 className="text-2xl font-bold mb-4">Keep Being Amazing!</h2>
                <p className="text-blue-100 leading-relaxed">
                  {analysis.aiAnalysis.encouragement}
                </p>
              </div>
            </div>

            {/* Career Interest Scores */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
                <i className="fa-solid fa-chart-bar text-[#4CAF50]"></i>
                Your Interest Areas
              </h2>
              <div className="space-y-4">
                {Object.entries(analysis.scores).map(([area, score]) => (
                  <div key={area}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{area}</span>
                      <span className="text-[#1A73E8] font-semibold">
                        {score}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] h-3 rounded-full transition-all duration-500"
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Educational Videos */}
            {/* {educationalContent?.videos &&
              educationalContent.videos.length > 0 && (
                <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
                    <i className="fa-solid fa-video text-[#FF4081]"></i>
                    Recommended Videos
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {educationalContent.videos.map((video, index) => (
                      <div
                        key={index}
                        className="bg-[#F5F7FA] rounded-xl p-4 hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {video.title}
                        </h3>
                        {video.description && (
                          <p className="text-gray-600 text-sm mb-2">
                            {video.description}
                          </p>
                        )}
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1A73E8] text-sm hover:underline inline-flex items-center gap-1"
                        >
                          Watch Video{" "}
                          <i className="fa-solid fa-arrow-right text-xs"></i>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}

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
                  <button className="bg-[#1A73E8] text-white rounded-full px-6 py-2 text-sm hover:bg-[#1557B0] transition-all flex items-center justify-center gap-2">
                    <i className="fa-solid fa-share"></i>
                    Share Results
                  </button>
                  <button className="bg-[#4CAF50] text-white rounded-full px-6 py-2 text-sm hover:bg-[#388E3C] transition-all flex items-center justify-center gap-2">
                    <i className="fa-solid fa-download"></i>
                    Save Certificate
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    className="bg-[#FF4081] text-white rounded-full px-6 py-2 text-sm hover:bg-[#E91E63] transition-all flex items-center justify-center gap-2"
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
