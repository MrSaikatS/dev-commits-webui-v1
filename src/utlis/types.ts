import { z } from "zod";
import { loginSchema, registerSchema } from "./zodschema";
import { User, File } from "@directus/types";

export type LoginFormType = z.infer<typeof loginSchema>;
export type RegisterFormType = z.infer<typeof registerSchema>;

export interface Post {
  id: string;
  user_created?: User;
  date_created: string;
  caption: string;
  img?: File;
  likes?: PostLike[];
}
export interface PostLike {
  id: string;
  user_created?: User;
  post_id?: Post;
}

export interface DirectusSchema {
  posts: Post[];
  post_likes: PostLike[];
}
