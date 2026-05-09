import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

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

// ── Colour palette — cycles across career cards ──────────────────────────────
const CARD_GRADIENTS = [
  "from-[#2a6b8b] to-[#1e4f66]",
  "from-[#fab548] to-[#e09e2e]",
  "from-[#2a6b8b] to-[#fab548]",
  "from-[#1e4f66] to-[#2a6b8b]",
  "from-[#e09e2e] to-[#fab548]",
];

const CareerRecommendations = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const profile: Profile | undefined = state?.profile;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!profile) navigate("/");
  }, [profile, navigate]);

  // Auto-advance carousel
  useEffect(() => {
    if (!profile) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profile.careerMatches.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [profile]);

  const handleJoinSkillSeed = () => {
    if (email) {
      alert(`Welcome to SkillSeed, ${email}! Check your email for next steps.`);
      setShowJoinModal(false);
      setEmail("");
    }
  };

  if (!profile) return null;

  const current = profile.careerMatches[currentIndex];
  const currentGradient = CARD_GRADIENTS[currentIndex % CARD_GRADIENTS.length];

  return (
    <div className="min-h-screen bg-gray-500/10">
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} className="w-12 md:w-16" alt="SkillSeed" />
            <span className="text-2xl md:text-3xl font-bold text-[#2a6b8b] uppercase">
              SkillSeed
            </span>
          </div>
          <a
            href="https://parents.wekraft.co/signup"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-[#fab548] text-white px-4 md:px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all">
              Join SkillSeed
            </button>
          </a>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-5 md:py-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2a6b8b]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#fab548]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#2a6b8b]/20 shadow-sm">
            <i className="fa-solid fa-magic-wand-sparkles text-[#2a6b8b] animate-spin"></i>
            <span className="text-[#2a6b8b] font-medium text-sm">
              AI-Powered Career Insights
            </span>
          </div>

          <h1
            className="text-3xl md:text-6xl font-bold text-[#2a6b8b]/90 mb-6 leading-tight"
            style={{ textShadow: "2px 2px 2px #FAB548" }}
          >
            Your Future Starts
            <span className="block">Here</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Based on your quiz results, we've identified exciting career paths
            that match your unique superpowers.
          </p>

          {/* Top career areas as pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {profile.topCareerAreas.map((area, i) => (
              <span
                key={i}
                className="bg-white/80 border border-[#2a6b8b]/20 text-[#2a6b8b] text-sm font-medium px-4 py-1.5 rounded-full shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-400">
            Learning style:{" "}
            <span className="font-semibold text-[#2a6b8b]">
              {profile.learningStyle}
            </span>
          </p>
        </div>
      </section>

      {/* ── Career Matches Carousel ──────────────────────────────────────────── */}
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2a6b8b] mb-4">
            Your Career Matches
          </h2>
          <p className="text-gray-600 text-lg">
            {profile.careerMatches.length} careers matched to your unique
            profile
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Card header — gradient from the career */}
            <div
              className={`bg-gradient-to-r ${currentGradient} p-8 text-white relative overflow-hidden`}
            >
              <div className="absolute top-4 right-4 opacity-20 text-8xl">
                {current.emoji}
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl">
                    {current.emoji}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-1">
                      {current.career}
                    </h3>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <i className="fa-solid fa-chart-line"></i>
                      <span>{current.matchPercentage}% match</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg mb-6 opacity-95 leading-relaxed">
                  {current.reasoning}
                </p>

                {/* Show the shared skills from this profile */}
                <div className="flex flex-wrap gap-2">
                  {profile.aiAnalysis.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card footer — dots + CTA */}
            <div className="p-8 bg-gradient-to-br from-white to-gray-50">
              <div className="flex justify-center gap-2 mb-6">
                {profile.careerMatches.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-[#2a6b8b] to-[#fab548] w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-3"
                    }`}
                  />
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://parents.wekraft.co/signup"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-[#2a6b8b] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all text-lg shadow-sm shadow-[#fab548]">
                    Explore This Career Path
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── All Matches — match percentage bars ─────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#2a6b8b] mb-8 text-center">
            Full Match Breakdown
          </h2>
          <div className="space-y-5">
            {profile.careerMatches.map((match, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-700 flex items-center gap-2">
                    <span>{match.emoji}</span>
                    {match.career}
                  </span>
                  <span className="text-[#2a6b8b] font-bold text-sm">
                    {match.matchPercentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div
                    className={`bg-gradient-to-r ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]} h-3 rounded-full transition-all duration-700`}
                    style={{ width: `${match.matchPercentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Traits ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#2a6b8b]/5 to-[#fab548]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2a6b8b] mb-4">
              Your Strengths
            </h2>
            <p className="text-gray-600 text-lg">
              The traits that set you apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {profile.traits.map((trait, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className="text-5xl mb-4">{trait.emoji}</div>
                <h3 className="text-xl font-bold text-[#2a6b8b] mb-2">
                  {trait.trait}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why SkillSeed ───────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2a6b8b] mb-4">
                Why Choose SkillSeed?
              </h2>
              <p className="text-gray-600 text-lg">
                Join the platform that's transforming how people discover and
                develop their potential
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "fa-user-graduate",
                  title: "Personalized Learning",
                  body: "AI-driven recommendations tailored to your unique strengths and interests",
                  flip: false,
                },
                {
                  icon: "fa-users",
                  title: "Expert Mentorship",
                  body: "Connect with industry professionals who guide your journey to success",
                  flip: true,
                },
                {
                  icon: "fa-trophy",
                  title: "Real Results",
                  body: "95% of our students report career advancement within 6 months",
                  flip: false,
                },
              ].map((item, i) => (
                <div key={i} className="text-center p-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${item.flip ? "from-[#fab548] to-[#2a6b8b]" : "from-[#2a6b8b] to-[#fab548]"} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <i
                      className={`fa-solid ${item.icon} text-white text-2xl`}
                    ></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#2a6b8b] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a6b8b] to-[#fab548]"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <i className="fa-solid fa-star text-[#fab548] animate-pulse"></i>
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Join thousands of learners who are already building tomorrow's
              skills today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                ["10,000+", "Students Empowered"],
                ["95%", "Success Rate"],
                ["500+", "Career Paths"],
              ].map(([num, label], i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold mb-2 text-[#fab548]">
                    {num}
                  </div>
                  <div className="text-white/80">{label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <a
                href="https://parents.wekraft.co/signup"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-white text-[#2a6b8b] px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all">
                  Start Your Journey Now
                  <i className="fa-solid fa-sparkles ml-2 text-[#fab548]"></i>
                </button>
              </a>
              <p className="text-white/70 text-sm">
                14-day free trial • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="bg-[#2a6b8b] text-white md:py-12 py-6">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4 gap-2">
            <img src={Logo} className="w-16" alt="SkillSeed" />
            <span className="text-3xl font-bold uppercase">SkillSeed</span>
          </div>
          <p className="text-white/40 mb-4">
            Growing tomorrow's skills, today.
          </p>
          <div className="text-sm text-white/30">
            © 2025 SkillSeed. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareerRecommendations;
