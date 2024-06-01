import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Plz Enter A Valid Email Address" }),
  password: z.string().min(10).max(20),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
