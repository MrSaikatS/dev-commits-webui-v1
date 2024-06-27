import { z } from "zod";
import {
  postSchema,
  updateProfileSchema,
  userLoginSchema,
  userRegisterSchmea,
} from "./zodSchemas";

export type loginSchemaType = z.infer<typeof userLoginSchema>;

export type postSchemaType = z.infer<typeof postSchema>;

export type UserRegisterSchmeaType = z.infer<typeof userRegisterSchmea>;

export type UpdateProfileSchemaType = z.infer<typeof updateProfileSchema>;

export interface Post {
  id: string;
  user_created: string;
  date_created: string;
  post_caption: string;
  post_img: string;
  post_likes: Like[];
}
export interface Like {
  id: string;
  user_created: string;
  post_ID: string;
}

export interface DirectusSchema {
  posts: Post[];
  likes: Like[];
}
