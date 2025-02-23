import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="font-serif text-6xl font-extrabold bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent mb-[150px]">
        Aarogya Diagnostic
      </h1>
      <div className="loading scale-[2] flex items-center justify-center p-8 rounded-lg translate-x-[190px]">
        <svg height="192px" width="288px">
          <polyline id="back" points="0.157 35.931, 21 35.931, 32.765 72, 64.5 0, 75 36, 96 36"></polyline>
          <polyline id="front" points="0.157 35.931, 21 35.931, 32.765 72, 64.5 0, 75 36, 96 36"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
