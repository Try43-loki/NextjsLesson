"use client";

import React from "react";
import { insertStudentAction } from "../../../actions/studentAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { studentSchema } from "../../../lib/zod/studentSchema";

const FormAddStudentComponent = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentSchema),
  });

  const handleAddProduct = (data) => {
    insertStudentAction(data);
    reset();
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Add New Student
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit(handleAddProduct)}>
        <div>
          <label
            htmlFor="studentName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Student Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-200 bg-gray-50 hover:bg-white text-gray-900 text-sm placeholder:text-xs placeholder:text-gray-400"
            placeholder="MoMO"
            {...register("studentName")}
          />
          <span className="text-red-500 text-sm mt-4">
            {errors?.studentName?.message}
          </span>
        </div>
        <div>
          <label
            htmlFor="studentClass"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Student Class
          </label>
          <input
            type="text"
            id="studentClass"
            name="studentClass"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-200 bg-gray-50 hover:bg-white text-gray-900 text-sm placeholder:text-xs placeholder:text-gray-400"
            placeholder="sr"
            {...register("studentClass")}
          />
          <span className="text-red-500 text-sm mt-4">
            {errors?.studentClass?.message}
          </span>
        </div>
        <div>
          <label
            htmlFor="studentClass"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Hometown
          </label>
          <input
            type="text"
            id="hometown"
            name="hometown"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-200 bg-gray-50 hover:bg-white text-gray-900 text-sm placeholder:text-xs placeholder:text-gray-400"
            placeholder="Kandal"
            {...register("hometown")}
          />
          <span className="text-red-500 text-sm mt-4">
            {errors?.hometown?.message}
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
};

export default FormAddStudentComponent;
