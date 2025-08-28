import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-[#0A1F44] text-white py-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble animate-float-slow absolute top-4 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="bubble animate-float-medium absolute top-8 right-1/3 w-12 h-12 bg-white/5 rounded-full"></div>
        <div className="bubble animate-float-fast absolute bottom-2 left-1/2 w-8 h-8 bg-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center md:justify-between">
          <div className="flex items-center gap-2">
            <img src={Logo} className="w-[60px]" />
            <span className="text-3xl font-bold uppercase font-nexa">SkillSeed</span>
          </div>

          {/* <nav className="hidden md:flex items-center gap-8">
            <span className="flex items-center gap-2 hover:text-[#FFC107] transition-colors cursor-pointer">
              <i className="fa-solid fa-house-chimney"></i>
              <span>Home</span>
            </span>
            <span className="flex items-center gap-2 hover:text-[#FFC107] transition-colors cursor-pointer">
              <i className="fa-solid fa-book-open"></i>
              <span>Learn</span>
            </span>
            <span className="flex items-center gap-2 text-[#FFC107]">
              <i className="fa-solid fa-brain"></i>
              <span>Quiz</span>
            </span>
            <span className="flex items-center gap-2 hover:text-[#FFC107] transition-colors cursor-pointer">
              <i className="fa-solid fa-trophy"></i>
              <span>Progress</span>
            </span>
          </nav> */}

          <div className="md:flex items-center gap-4 hidden">
            <div className="flex items-center gap-3">
              <div className="relative">
                <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FFC107]">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </button>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#4CAF50] rounded-full border-2 border-[#0A1F44]"></div>
              </div>
              <div className="hidden md:block">
                {/* <p className="text-sm font-medium">Emma</p> */}
                <p className="text-sm font-medium text-gray-300">
                  Quiz Explorer
                </p>
              </div>
            </div>
          </div>

          {/* <button className="md:hidden rounded-full w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
            <i className="fa-solid fa-bars text-white"></i>
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
