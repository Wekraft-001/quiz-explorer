import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

interface AIAnalysis {
  explanation: string;
  skills: string[];
  activities: string[];
  encouragement: string;
}

interface CareerMatch {
  emoji: string;
  career: string;
  reasoning: string;
  matchPercentage: number;
}

interface PersonalityTrait {
  emoji: string;
  trait: string;
  description: string;
}

interface Profile {
  topCareerAreas: string[];
  careerMatches: CareerMatch[];
  traits: PersonalityTrait[];
  learningStyle: string;
  aiAnalysis: AIAnalysis;
}

interface ResultsData {
  sessionId: string;
  quizId: string;
  ageRange: string;
  submittedAt: string;
  profile: Profile;
}

// ── Gradient palette — cycles across career match bars ──────────────────────
const BAR_GRADIENTS = [
  "from-[#1A73E8] to-[#4CAF50]",
  "from-[#9C27B0] to-[#1A73E8]",
  "from-[#FF9800] to-[#FF4081]",
  "from-[#4CAF50] to-[#00BCD4]",
  "from-[#FF4081] to-[#9C27B0]",
];

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [resultsData, setResultsData] = useState<ResultsData | null>(null);

  useEffect(() => {
    if (location.state) {
      setResultsData(location.state as ResultsData);
    } else {
      navigate("/");
    }
  }, [location.state, navigate]);

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

  const { profile } = resultsData;

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />
      <main>
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">

            {/* ── Header ────────────────────────────────────────────────────── */}
            <div className="text-center mb-12 relative">
              <div className="absolute -top-8 left-1/4 w-20 h-20 bg-[#FFC107]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-4 right-1/3 w-16 h-16 bg-[#FF4081]/20 rounded-full blur-lg animate-bounce"></div>

              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
                <i className="fa-solid fa-trophy text-[#FFC107] text-2xl animate-bounce"></i>
                <span className="text-gray-800/90 font-semibold">Quiz Complete!</span>
                <i className="fa-solid fa-star text-[#FF4081] text-xl animate-spin"></i>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-800/90 mb-4">
                Amazing Work! <span className="text-[#1A73E8]">🎉</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                You've discovered some incredible superpowers! Here's what we learned about you.
              </p>
            </div>

            {/* ── AI Explanation ────────────────────────────────────────────── */}
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#9C27B0] to-[#673AB7] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="fa-solid fa-brain text-white text-3xl animate-pulse"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800/90 mb-3">AI Analysis</h2>
                <p className="text-[#9C27B0] font-semibold text-lg">Your Personalized Profile</p>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                <p className="text-gray-600 leading-8">{profile.aiAnalysis.explanation}</p>
              </div>
            </div>

            {/* ── Personality Traits ────────────────────────────────────────── */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FFC107] to-[#FF9800] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="fa-solid fa-magic-wand-sparkles text-white text-3xl animate-pulse"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800/90 mb-3">Your Superpower Profile</h2>
                <p className="text-[#1A73E8] font-semibold text-lg">
                  {profile.traits.map((t) => t.trait).join(" • ")} ✨
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {profile.traits.map((trait, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="w-16 h-16 bg-[#1A73E8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{trait.emoji}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800/90 mb-2">{trait.trait}</h3>
                    <p className="text-gray-500 text-sm">{trait.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Skills ───────────────────────────────────────────────────── */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fa-solid fa-lightbulb text-white text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#212121] mb-2">Skills to Develop</h2>
                <p className="text-gray-600">Build these skills to grow your talents</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {profile.aiAnalysis.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl px-5 py-4 shadow-sm flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-[#4CAF50]/10 rounded-full flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-check text-[#4CAF50] text-sm"></i>
                    </div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Activities ───────────────────────────────────────────────── */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF9800] to-[#F57C00] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fa-solid fa-rocket text-white text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#212121] mb-2">Fun Activities</h2>
                <p className="text-gray-600">Try these activities to explore your interests</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {profile.aiAnalysis.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl px-5 py-4 shadow-sm flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-[#FF9800]/10 rounded-full flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-star text-[#FF9800] text-sm"></i>
                    </div>
                    <span className="text-gray-700 font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Encouragement ────────────────────────────────────────────── */}
            <div className="bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] rounded-2xl p-8 mb-8 shadow-lg text-white">
              <div className="text-center">
                <i className="fa-solid fa-heart text-5xl mb-4 animate-pulse"></i>
                <h2 className="text-2xl font-bold mb-4">Keep Being Amazing!</h2>
                <p className="text-blue-100 leading-relaxed">{profile.aiAnalysis.encouragement}</p>
              </div>
            </div>

            {/* ── Career Matches ────────────────────────────────────────────── */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#212121] mb-2 flex items-center gap-3">
                <i className="fa-solid fa-chart-bar text-[#4CAF50]"></i>
                Your Career Matches
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Learning style: <span className="font-semibold text-[#1A73E8]">{profile.learningStyle}</span>
              </p>
              <div className="space-y-5">
                {profile.careerMatches.map((match, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-700 flex items-center gap-2">
                        <span>{match.emoji}</span>
                        {match.career}
                      </span>
                      <span className="text-[#1A73E8] font-semibold text-sm">
                        {match.matchPercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 mb-1">
                      <div
                        className={`bg-gradient-to-r ${BAR_GRADIENTS[index % BAR_GRADIENTS.length]} h-3 rounded-full transition-all duration-700`}
                        style={{ width: `${match.matchPercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{match.reasoning}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CTA — Explore More ───────────────────────────────────────── */}
            <div className="bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20">
                <i className="fa-solid fa-robot text-6xl"></i>
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="fa-solid fa-magic-wand-sparkles text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">Explore Your Career Paths</h3>
                <p className="text-blue-100 mb-6 text-sm leading-relaxed max-w-md mx-auto">
                  Dive deeper into each career match and discover personalised learning paths built just for you.
                </p>
                <button
                  onClick={() =>
                    navigate("/career-recommendations", { state: { profile } })
                  }
                  className="w-full bg-white text-[#1A73E8] rounded-full py-3 px-6 font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-sparkles"></i>
                  Explore More
                </button>
              </div>
            </div>

            {/* ── Share / Retake ───────────────────────────────────────────── */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800/90 mb-4">
                  Share Your Results! 🌟
                </h3>
                <p className="text-gray-500 mb-6">
                  Let your friends and family know about your amazing discoveries!
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <button className="bg-[#1A73E8] text-white rounded-full px-6 py-2 text-sm hover:bg-[#1557B0] transition-all flex items-center justify-center gap-2">
                    <i className="fa-solid fa-share"></i>
                    Share Results
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