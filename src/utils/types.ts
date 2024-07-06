import { z } from "zod";
import {
  postSchema,
  updateProfileSchema,
  userLoginSchema,
  userRegisterSchmea,
} from "./zodSchemas";
import { DirectusUser } from "@directus/sdk";

export type loginSchemaType = z.infer<typeof userLoginSchema>;

export type postSchemaType = z.infer<typeof postSchema>;

export type UserRegisterSchmeaType = z.infer<typeof userRegisterSchmea>;

export type UpdateProfileSchemaType = z.infer<typeof updateProfileSchema>;

export type User = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  password: string | null;
  location: string | null;
  title: string | null;
  description: string | null;
  tags: string[] | null;
  avatar: Filetype | string | null;
  language: string | null;
  theme: string | null;
  tfa_secret: string | null;
  status: string;

  token: string | null;
  last_access: "datetime" | null;
  last_page: string | null;
  provider: string;
  external_identifier: string | null;
  auth_data: Record<string, any> | null;
  email_notifications: boolean | null;
};
export type Filetype = {
  id: string;
  storage: string;
  filename_disk: string | null;
  filename_download: string;
  title: string | null;
  type: string | null;

  uploaded_by: DirectusUser<DirectusSchema> | string | null;
  uploaded_on: "datetime";
  modified_by: DirectusUser<DirectusSchema> | string | null;
  modified_on: "datetime";
  charset: string | null;
  filesize: string | null;
  width: number | null;
  height: number | null;
  duration: number | null;
  embed: unknown | null;
  description: string | null;
  location: string | null;
  tags: string[] | null;
  metadata: Record<string, any> | null;
  focal_point_x: number | null;
  focal_point_y: number | null;
};

export interface Post {
  id: string;
  sort: number;
  user_created: User[];
  date_created: string;
  caption: string;
  img: string;
  likes?: Like[] | null;
}
export interface Like {
  id: string;
  user_created: User;
  post_id: string;
}

export interface DirectusSchema {
  posts: Post[];
  likes: Like[];
}
