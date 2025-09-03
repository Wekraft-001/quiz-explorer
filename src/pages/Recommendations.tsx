// import React, { useState, useEffect } from "react";

// const CareerRecommendations = () => {
//   const [currentRecommendation, setCurrentRecommendation] = useState(0);
//   const [showJoinModal, setShowJoinModal] = useState(false);
//   const [email, setEmail] = useState("");

//   const recommendations = [
//     {
//       title: "Creative Director",
//       description:
//         "Lead creative teams and bring innovative ideas to life through visual storytelling and design.",
//       skills: [
//         "Leadership",
//         "Creative Thinking",
//         "Team Management",
//         "Design Strategy",
//       ],
//       icon: "fa-solid fa-palette",
//       color: "from-purple-500 to-pink-500",
//       salary: "$75,000 - $120,000",
//       growth: "15% projected growth",
//     },
//     {
//       title: "UX/UI Designer",
//       description:
//         "Design intuitive digital experiences that solve problems and delight users.",
//       skills: [
//         "User Research",
//         "Prototyping",
//         "Visual Design",
//         "Problem Solving",
//       ],
//       icon: "fa-solid fa-mobile-screen-button",
//       color: "from-blue-500 to-cyan-500",
//       salary: "$65,000 - $110,000",
//       growth: "13% projected growth",
//     },
//     {
//       title: "Innovation Manager",
//       description:
//         "Drive organizational change and lead breakthrough projects that shape the future.",
//       skills: [
//         "Strategic Thinking",
//         "Project Management",
//         "Innovation",
//         "Communication",
//       ],
//       icon: "fa-solid fa-rocket",
//       color: "from-orange-500 to-red-500",
//       salary: "$80,000 - $130,000",
//       growth: "18% projected growth",
//     },
//     {
//       title: "Creative Entrepreneur",
//       description:
//         "Build your own creative business and turn your passion into a thriving enterprise.",
//       skills: ["Business Development", "Creativity", "Leadership", "Marketing"],
//       icon: "fa-solid fa-lightbulb",
//       color: "from-green-500 to-teal-500",
//       salary: "$50,000 - $200,000+",
//       growth: "Self-directed growth",
//     },
//   ];

//   const learningPaths = [
//     {
//       title: "Creative Leadership Bootcamp",
//       duration: "6 weeks",
//       level: "Intermediate",
//       icon: "fa-solid fa-crown",
//       modules: [
//         "Team Dynamics",
//         "Creative Strategy",
//         "Project Management",
//         "Communication Skills",
//       ],
//     },
//     {
//       title: "Design Thinking Workshop",
//       duration: "4 weeks",
//       level: "Beginner",
//       icon: "fa-solid fa-brain",
//       modules: ["User Empathy", "Ideation", "Prototyping", "Testing"],
//     },
//     {
//       title: "Innovation Labs",
//       duration: "8 weeks",
//       level: "Advanced",
//       icon: "fa-solid fa-flask",
//       modules: [
//         "Trend Analysis",
//         "Future Thinking",
//         "Solution Design",
//         "Implementation",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentRecommendation((prev) => (prev + 1) % recommendations.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleJoinSkillSeed = () => {
//     if (email) {
//       // Here you would handle the signup
//       alert(`Welcome to SkillSeed, ${email}! Check your email for next steps.`);
//       setShowJoinModal(false);
//       setEmail("");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
//                 <i className="fa-solid fa-seedling text-white text-lg"></i>
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 SkillSeed
//               </span>
//             </div>
//             <button
//               onClick={() => setShowJoinModal(true)}
//               className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all"
//             >
//               Join SkillSeed
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden py-16">
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-purple-100">
//               <i className="fa-solid fa-magic-wand-sparkles text-purple-600 animate-spin"></i>
//               <span className="text-purple-700 font-medium text-sm">
//                 AI-Powered Career Insights
//               </span>
//             </div>

//             <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
//               Your Future Starts
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
//                 Here
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
//               Based on your quiz results, we've identified exciting career paths
//               that match your unique superpowers. Discover opportunities that
//               align with who you are and who you want to become.
//             </p>

//             <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
//               <div className="flex items-center gap-2">
//                 <i className="fa-solid fa-check-circle text-green-500"></i>
//                 <span>Personalized for you</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <i className="fa-solid fa-brain text-purple-500"></i>
//                 <span>AI-powered insights</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <i className="fa-solid fa-rocket text-pink-500"></i>
//                 <span>Future-ready skills</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Career Recommendations Carousel */}
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Your Career Matches
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Careers that align with your creative explorer and leadership
//               spark profile
//             </p>
//           </div>

//           <div className="relative max-w-4xl mx-auto">
//             <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//               <div
//                 className={`bg-gradient-to-r ${recommendations[currentRecommendation].color} p-8 text-white relative overflow-hidden`}
//               >
//                 <div className="absolute top-4 right-4 opacity-20">
//                   <i
//                     className={`${recommendations[currentRecommendation].icon} text-8xl`}
//                   ></i>
//                 </div>

//                 <div className="relative z-10">
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
//                       <i
//                         className={`${recommendations[currentRecommendation].icon} text-2xl`}
//                       ></i>
//                     </div>
//                     <div>
//                       <h3 className="text-3xl font-bold mb-2">
//                         {recommendations[currentRecommendation].title}
//                       </h3>
//                       <div className="flex gap-4 text-sm opacity-90">
//                         <span>
//                           {recommendations[currentRecommendation].salary}
//                         </span>
//                         <span>•</span>
//                         <span>
//                           {recommendations[currentRecommendation].growth}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <p className="text-lg mb-6 opacity-95">
//                     {recommendations[currentRecommendation].description}
//                   </p>

//                   <div className="flex flex-wrap gap-2">
//                     {recommendations[currentRecommendation].skills.map(
//                       (skill, index) => (
//                         <span
//                           key={index}
//                           className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium"
//                         >
//                           {skill}
//                         </span>
//                       )
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="p-8">
//                 <div className="flex justify-center gap-2 mb-6">
//                   {recommendations.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentRecommendation(index)}
//                       className={`w-3 h-3 rounded-full transition-all ${
//                         index === currentRecommendation
//                           ? "bg-purple-600 w-8"
//                           : "bg-gray-300 hover:bg-gray-400"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <div className="text-center">
//                   <button
//                     onClick={() => setShowJoinModal(true)}
//                     className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all text-lg"
//                   >
//                     Explore This Career Path
//                     <i className="fa-solid fa-arrow-right ml-2"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Learning Paths */}
//       <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Personalized Learning Paths
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Develop the skills you need with our curated learning experiences
//               designed specifically for your profile
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {learningPaths.map((path, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
//               >
//                 <div className="text-center mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <i className={`${path.icon} text-white text-2xl`}></i>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">
//                     {path.title}
//                   </h3>
//                   <div className="flex justify-center gap-4 text-sm text-gray-500">
//                     <span className="flex items-center gap-1">
//                       <i className="fa-solid fa-clock"></i>
//                       {path.duration}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <i className="fa-solid fa-signal"></i>
//                       {path.level}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="space-y-3 mb-6">
//                   {path.modules.map((module, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-center gap-3 text-gray-600"
//                     >
//                       <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
//                       <span className="text-sm">{module}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => setShowJoinModal(true)}
//                   className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-xl font-medium hover:shadow-lg transition-all"
//                 >
//                   Start Learning
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
//         <div className="absolute inset-0 bg-black/20"></div>

//         <div className="container mx-auto px-6 relative z-10 text-center text-white">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Ready to Transform Your Future?
//             </h2>
//             <p className="text-xl mb-8 opacity-90 leading-relaxed">
//               Join thousands of learners who are already building tomorrow's
//               skills today. Get personalized guidance, expert mentorship, and
//               access to cutting-edge learning resources.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//               <div className="text-center">
//                 <div className="text-4xl font-bold mb-2">10,000+</div>
//                 <div className="text-purple-200">Students Empowered</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-bold mb-2">95%</div>
//                 <div className="text-purple-200">Success Rate</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-bold mb-2">500+</div>
//                 <div className="text-purple-200">Career Paths</div>
//               </div>
//             </div>

//             <button
//               onClick={() => setShowJoinModal(true)}
//               className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
//             >
//               Join SkillSeed Now
//               <i className="fa-solid fa-sparkles ml-2"></i>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Join Modal */}
//       {showJoinModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
//             <button
//               onClick={() => setShowJoinModal(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//             >
//               <i className="fa-solid fa-times text-xl"></i>
//             </button>

//             <div className="text-center mb-6">
//               <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <i className="fa-solid fa-seedling text-white text-2xl"></i>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                 Welcome to SkillSeed!
//               </h3>
//               <p className="text-gray-600">
//                 Start your personalized learning journey today
//               </p>
//             </div>

//             <div className="space-y-4">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email address"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//               />

//               <button
//                 onClick={handleJoinSkillSeed}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
//               >
//                 Get Started Free
//               </button>
//             </div>

//             <div className="text-center mt-4 text-sm text-gray-500">
//               No credit card required • Cancel anytime
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-6 text-center">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
//               <i className="fa-solid fa-seedling text-white text-lg"></i>
//             </div>
//             <span className="text-2xl font-bold">SkillSeed</span>
//           </div>
//           <p className="text-gray-400 mb-6">
//             Growing tomorrow's skills, today.
//           </p>
//           <div className="text-sm text-gray-500">
//             © 2024 SkillSeed. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CareerRecommendations;

import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";

const CareerRecommendations = () => {
  const [currentRecommendation, setCurrentRecommendation] = useState(0);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [email, setEmail] = useState("");

  const recommendations = [
    {
      title: "Creative Director",
      description:
        "Lead creative teams and bring innovative ideas to life through visual storytelling and design.",
      skills: [
        "Leadership",
        "Creative Thinking",
        "Team Management",
        "Design Strategy",
      ],
      icon: "fa-solid fa-palette",
      color: "from-[#2a6b8b] to-[#1e4f66]",
      salary: "$75,000 - $120,000",
      growth: "15% projected growth",
    },
    {
      title: "UX/UI Designer",
      description:
        "Design intuitive digital experiences that solve problems and delight users.",
      skills: [
        "User Research",
        "Prototyping",
        "Visual Design",
        "Problem Solving",
      ],
      icon: "fa-solid fa-mobile-screen-button",
      color: "from-[#fab548] to-[#e09e2e]",
      salary: "$65,000 - $110,000",
      growth: "13% projected growth",
    },
    {
      title: "Innovation Manager",
      description:
        "Drive organizational change and lead breakthrough projects that shape the future.",
      skills: [
        "Strategic Thinking",
        "Project Management",
        "Innovation",
        "Communication",
      ],
      icon: "fa-solid fa-rocket",
      color: "from-[#2a6b8b] to-[#fab548]",
      salary: "$80,000 - $130,000",
      growth: "18% projected growth",
    },
    {
      title: "Creative Entrepreneur",
      description:
        "Build your own creative business and turn your passion into a thriving enterprise.",
      skills: ["Business Development", "Creativity", "Leadership", "Marketing"],
      icon: "fa-solid fa-lightbulb",
      color: "from-[#fab548] to-[#2a6b8b]",
      salary: "$50,000 - $200,000+",
      growth: "Self-directed growth",
    },
  ];

  const learningPaths = [
    {
      title: "Creative Leadership Bootcamp",
      duration: "6 weeks",
      level: "Intermediate",
      icon: "fa-solid fa-crown",
      modules: [
        "Team Dynamics",
        "Creative Strategy",
        "Project Management",
        "Communication Skills",
      ],
    },
    {
      title: "Design Thinking Workshop",
      duration: "4 weeks",
      level: "Beginner",
      icon: "fa-solid fa-brain",
      modules: ["User Empathy", "Ideation", "Prototyping", "Testing"],
    },
    {
      title: "Innovation Labs",
      duration: "8 weeks",
      level: "Advanced",
      icon: "fa-solid fa-flask",
      modules: [
        "Trend Analysis",
        "Future Thinking",
        "Solution Design",
        "Implementation",
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRecommendation((prev) => (prev + 1) % recommendations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleJoinSkillSeed = () => {
    if (email) {
      // Here you would handle the signup
      alert(`Welcome to SkillSeed, ${email}! Check your email for next steps.`);
      setShowJoinModal(false);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-500/10">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-[#2a6b8b] to-[#fab548] rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-seedling text-white text-lg"></i>
              </div> */}
              <img src={Logo} className="w-12 md:w-16" />
              <span className="text-2xl md:text-3xl font-bold text-[#2a6b8b] bg-clip-text text-transparent uppercase">
                SkillSeed
              </span>
            </div>
            <a href="https://parents.wekraft.co/signup" target="_blank">
              <button
                // onClick={() => setShowJoinModal(true)}
                className="bg-[#fab548] text-white px-4 md:px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Join SkillSeed
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-5 md:py-10">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2a6b8b]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#fab548]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2a6b8b]/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
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
              <span className="text-[#2a6b8b] bg-clip-text text-transparent block">
                Here
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Based on your quiz results, we've identified exciting career paths
              that match your unique superpowers. Discover opportunities that
              align with who you are and who you want to become.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-[#fab548]"></i>
                <span>Personalized for you</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-brain text-[#2a6b8b]"></i>
                <span>AI-powered insights</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-rocket text-[#fab548]"></i>
                <span>Future-ready skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Recommendations Carousel */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2a6b8b] mb-4">
            Your Career Matches
          </h2>
          <p className="text-gray-600 text-lg">
            Careers that align with your creative explorer and leadership spark
            profile
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div
              className={`bg-gradient-to-r ${recommendations[currentRecommendation].color} p-8 text-white relative overflow-hidden`}
            >
              <div className="absolute top-4 right-4 opacity-20">
                <i
                  className={`${recommendations[currentRecommendation].icon} text-8xl`}
                ></i>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i
                      className={`${recommendations[currentRecommendation].icon} text-2xl`}
                    ></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      {recommendations[currentRecommendation].title}
                    </h3>
                    <div className="flex gap-4 text-sm opacity-90">
                      <span className="flex items-center gap-1">
                        <i className="fa-solid fa-dollar-sign"></i>
                        {recommendations[currentRecommendation].salary}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <i className="fa-solid fa-chart-line"></i>
                        {recommendations[currentRecommendation].growth}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-lg mb-6 opacity-95 leading-relaxed">
                  {recommendations[currentRecommendation].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {recommendations[currentRecommendation].skills.map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-white/20"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-white to-gray-50">
              <div className="flex justify-center gap-2 mb-6">
                {recommendations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentRecommendation(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentRecommendation
                        ? "bg-gradient-to-r from-[#2a6b8b] to-[#fab548] w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-3"
                    }`}
                  />
                ))}
              </div>

              <div className="text-center">
                <a href="https://parents.wekraft.co/signup" target="_blank">
                  <button
                    // onClick={() => setShowJoinModal(true)}
                    className="bg-[#2a6b8b] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all text-lg shadow-sm shadow-[#fab548]"
                  >
                    Explore This Career Path
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Paths */}
      <section className="py-16 bg-gradient-to-br from-[#2a6b8b]/5 to-[#fab548]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2a6b8b] mb-4">
              Personalized Learning Paths
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Develop the skills you need with our curated learning experiences
              designed specifically for your profile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      index % 2 === 0
                        ? "bg-gradient-to-r from-[#2a6b8b] to-[#1e4f66]"
                        : "bg-gradient-to-r from-[#fab548] to-[#e09e2e]"
                    }`}
                  >
                    <i className={`${path.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#2a6b8b] mb-2">
                    {path.title}
                  </h3>
                  <div className="flex justify-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-clock text-[#fab548]"></i>
                      {path.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-signal text-[#2a6b8b]"></i>
                      {path.level}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {path.modules.map((module, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          idx % 2 === 0 ? "bg-[#2a6b8b]" : "bg-[#fab548]"
                        }`}
                      ></div>
                      <span className="text-sm">{module}</span>
                    </div>
                  ))}
                </div>

                {/* <button
                  onClick={() => setShowJoinModal(true)}
                  className={`w-full text-white py-2 rounded-xl font-medium hover:shadow-lg transition-all ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-[#2a6b8b] to-[#1e4f66] hover:from-[#1e4f66] hover:to-[#2a6b8b]"
                      : "bg-gradient-to-r from-[#fab548] to-[#e09e2e] hover:from-[#e09e2e] hover:to-[#fab548]"
                  }`}
                >
                  Start Learning
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#2a6b8b] to-[#fab548] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-user-graduate text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-[#2a6b8b] mb-3">
                  Personalized Learning
                </h3>
                <p className="text-gray-600">
                  AI-driven recommendations tailored to your unique strengths
                  and interests
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#fab548] to-[#2a6b8b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-[#2a6b8b] mb-3">
                  Expert Mentorship
                </h3>
                <p className="text-gray-600">
                  Connect with industry professionals who guide your journey to
                  success
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#2a6b8b] to-[#fab548] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-trophy text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-[#2a6b8b] mb-3">
                  Real Results
                </h3>
                <p className="text-gray-600">
                  95% of our students report career advancement within 6 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a6b8b] to-[#fab548]"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

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
              skills today. Get personalized guidance, expert mentorship, and
              access to cutting-edge learning resources.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-[#fab548]">
                  10,000+
                </div>
                <div className="text-white/80">Students Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-[#fab548]">
                  95%
                </div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-[#fab548]">
                  500+
                </div>
                <div className="text-white/80">Career Paths</div>
              </div>
            </div>

            <div className="space-y-4">
              <a href="https://parents.wekraft.co/signup" target="_blank">
                <button
                  // onClick={() => setShowJoinModal(true)}
                  className="bg-white text-[#2a6b8b] px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
                >
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

      {/* Join Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative border border-gray-100 shadow-2xl">
            <button
              onClick={() => setShowJoinModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i className="fa-solid fa-times text-xl"></i>
            </button>

            <div className="text-center mb-6">
              <div className="w-20 flex items-center justify-center mx-auto mb-4">
                <img src={Logo} />
              </div>
              <h3 className="text-2xl font-bold text-[#2a6b8b] mb-2">
                Welcome to SkillSeed!
              </h3>
              <p className="text-gray-600">
                Start your personalized learning journey today (6 - 18)
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2a6b8b] focus:border-transparent outline-none transition-all"
              />

              <button
                onClick={handleJoinSkillSeed}
                className="w-full bg-gradient-to-r from-[#2a6b8b] to-[#fab548] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                Get Started Free
              </button>
            </div>

            <div className="text-center mt-4 text-sm text-gray-500">
              No credit card required • Cancel anytime
            </div>

            {/* Benefits in modal */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-check text-[#fab548]"></i>
                <span>Personalized career roadmaps</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-check text-[#fab548]"></i>
                <span>1-on-1 mentorship sessions</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-check text-[#fab548]"></i>
                <span>Access to exclusive workshops</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2a6b8b] text-white md:py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            {/* <div className="w-10 h-10 bg-gradient-to-r from-[#fab548] to-[#e09e2e] rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-seedling text-white text-lg"></i>
            </div> */}
            <img src={Logo} className="w-16" />
            <span className="text-3xl font-bold uppercase">SkillSeed</span>
          </div>
          <p className="text-[#2a6b8b]/30 mb-6">
            Growing tomorrow's skills, today.
          </p>
          <div className="text-sm text-[#2a6b8b]/20">
            © 2025 SkillSeed. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareerRecommendations;
