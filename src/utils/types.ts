import { z } from "zod";
import {
  accountEditSchema,
  postSchema,
  profileEditSchema,
  userLoginSchema,
  userRegisterSchmea,
} from "./zodSchemas";

export type loginSchemaType = z.infer<typeof userLoginSchema>;

export type postSchemaType = z.infer<typeof postSchema>;

export type UserRegisterSchmeaType = z.infer<typeof userRegisterSchmea>;

export type accountEditSchemaType = z.infer<typeof accountEditSchema>;

export type profileEditSchemaType = z.infer<typeof profileEditSchema>;
