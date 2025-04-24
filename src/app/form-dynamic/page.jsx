"use client";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

const FormPage = () => {
  const { register, reset, handleSubmit, control } = useForm({
    defaultValues: {
      tasks: [], // Initialize with empty array
    },
  });

  // Use FieldArray for tasks
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks", // This matches the name in defaultValues
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Tasks:", data);
    reset(); // Reset the form after submission
  };

  return (
    <>
      <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md mx-auto mt-24">
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Tasks</h2>
          <p className="text-md md:text-xl">Set up your daily!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col max-w-md space-y-3 mb-5 relative"
            >
              <input
                type="text"
                placeholder="Task name"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                {...register(`tasks.${index}.name`)}
              />
              <input
                type="number"
                placeholder="Duration (in minutes)"
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                {...register(`tasks.${index}.duration`)}
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}

          <div className="flex justify-start items-center gap-x-5">
            <button
              type="button"
              onClick={() => append({ name: "", duration: "" })}
              className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-white text-black"
            >
              Add Task
            </button>

            <button
              type="submit"
              className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormPage;
