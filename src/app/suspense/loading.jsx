import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-purple-200 rounded-full animate-spin border-t-purple-600"></div>
        <p className="text-lg text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
