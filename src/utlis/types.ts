import { z } from "zod";
import {
  createPostSchema,
  loginSchema,
  registerSchema,
  updateProfileSchema,
} from "./zodschema";
import { User, File } from "@directus/types";

export type LoginFormType = z.infer<typeof loginSchema>;
export type RegisterFormType = z.infer<typeof registerSchema>;
export type postSchemaType = z.infer<typeof createPostSchema>;
export type UpdateProfileFormType = z.infer<typeof updateProfileSchema>;

export type UserPropsType = {
  info: User;
};

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
