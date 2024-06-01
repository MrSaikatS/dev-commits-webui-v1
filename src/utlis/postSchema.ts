import { z } from "zod";

export const postSchema = z.object({
  caption: z.string(),
});

export type postSchemaType = z.infer<typeof postSchema>;
