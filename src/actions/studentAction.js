"use server";

import { insertStudent } from "../services/students.service";
import { revalidateTag } from "next/cache";

export const insertStudentAction = async (formData) => {
  try {
    await insertStudent(formData);
    revalidateTag("student");
    return { success: true, message: "Student added successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
