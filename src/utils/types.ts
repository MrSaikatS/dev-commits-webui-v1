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
  sort: number;
  user_created: string;
  date_created: string;
  caption: string;
  img: string;
  lyk?: Like[] | null;
}
export interface Like {
  id: string;
  user_created: string;
  post_id: string;
}

export interface DirectusSchema {
  posts: Post[];
  likes: Like[];
}
