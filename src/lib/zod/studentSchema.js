import { z } from "zod";

export const studentSchema = z.object({
  studentName: z.string().min(1, { message: "Name is required" }),
  studentClass: z
    .string()
    .min(1, { message: "Class is required" })
    .max(5, { message: "Class must be less than 5 characters" }),
  hometown: z.string().min(1, { message: "Hometown is required" }),
});
