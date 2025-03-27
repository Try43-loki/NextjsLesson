import { z } from "zod";

export const musicSchema = z.object({
  title: z
    .string()
    .min(3, { message: " Music title must be 3 or more character long " })
    .max(50, { message: " Music title must be 50 or less character long " }),
  genre: z
    .string()
    .min(3, { message: " Music genre must be 3 or more character long " })
    .max(50, { message: " Music genre must be 50 or less character long " }),
});
