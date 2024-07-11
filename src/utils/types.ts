import { z } from "zod";
import {
  postSchema,
  updateProfileSchema,
  userLoginSchema,
  userRegisterSchmea,
} from "./zodSchemas";
import { User, File } from "@directus/types";

export type loginSchemaType = z.infer<typeof userLoginSchema>;

export type postSchemaType = z.infer<typeof postSchema>;

export type UserRegisterSchmeaType = z.infer<typeof userRegisterSchmea>;

export type UpdateProfileSchemaType = z.infer<typeof updateProfileSchema>;

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
