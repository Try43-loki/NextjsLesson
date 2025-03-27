"use client";
import { useCountStore } from "@/store/store";

export function CounterDisplayComponent() {
  const { count, increment, decrement } = useCountStore();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105">
        <div className="text-center">
          <p className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Count: {count}
          </p>
          <div className="space-x-4">
            <button
              onClick={increment}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transform transition-all hover:scale-105 active:scale-95"
            >
              Increment
            </button>
            <button
              onClick={decrement}
              className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transform transition-all hover:scale-105 active:scale-95"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
