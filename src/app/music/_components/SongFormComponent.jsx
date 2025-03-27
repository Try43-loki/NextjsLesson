"use client";

import { addMusicAction } from "../../../actions/musicAction";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { musicSchema } from "../../../lib/zod/musicSchema";

export default function SongFormComponent() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(musicSchema),
  });

  const handleAddProduct = (data) => {
    addMusicAction(data);
    reset();
  };
  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Add New Song
      </h2>
      <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-200 bg-gray-50 hover:bg-white text-gray-900 placeholder-gray-500"
            placeholder="Enter song title"
            {...register("title")}
          />
          <span className="text-red-500 text-sm mt-4">
            {errors?.title?.message}
          </span>
        </div>

        <div>
          <label
            htmlFor="genres"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Genres
          </label>
          <input
            type="text"
            id="genres"
            name="genres"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-200 bg-gray-50 hover:bg-white text-gray-900 placeholder-gray-500"
            placeholder="Enter genres"
            {...register("genres")}
          />
          <span className="text-red-500 text-sm mt-4">
            {errors?.genre?.message}
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
