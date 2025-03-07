import React from "react";
import "./loading.css";

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-default select-none h-[80px]">
          Aarogya Diagnostic
        </h1>
        <div className="relative w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md">
          <div className="loading-pulse absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 rounded-full blur-xl opacity-70 animate-pulse"></div>
          <div className="loading-container relative scale-150 sm:scale-[2] flex items-center justify-center p-4 sm:p-8 rounded-lg mt-[190px]">
            <svg className="loading-svg" height="96px" width="144px" viewBox="0 0 96 72">
              <polyline 
                className="back-line" 
                points="0 36, 20 36, 25 36, 30 20, 35 52, 40 36, 45 36, 50 36, 55 36, 60 36, 65 36, 70 36, 75 36, 80 36, 96 36" 
                fill="none" 
                stroke="#41691b" 
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline 
                className="front-line" 
                points="0 36, 20 36, 25 36, 30 20, 35 52, 40 36, 45 36, 50 36, 55 36, 60 36, 65 36, 70 36, 75 36, 80 36, 96 36" 
                fill="none" 
                stroke="#789e1f" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg font-medium animate-pulse mt-[250px]">
          Loading your healthcare journey...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
