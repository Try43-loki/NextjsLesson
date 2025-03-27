"use client"; // Must be a Client Component because it uses hooks or interactivity

export default function Error({ error, reset }) {
  return (
    <div className="p-8 my-8 bg-red-50 border-2 border-red-500 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Something Went Wrong!
      </h2>
      <p className="text-red-500 mb-6 font-medium">
        Error: <span className="font-normal">{error.message}</span>
      </p>
      <button
        onClick={() => reset()}
        className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Try Again
      </button>
    </div>
  );
}
