import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(1, "Name is required"), // 👈 not firstName
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});
 