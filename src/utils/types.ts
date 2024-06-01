import { z } from "zod";
import { postSchema, userLoginSchema, userRegisterSchmea } from "./zodSchemas";

export type loginSchemaType = z.infer<typeof userLoginSchema>;

export type postSchemaType = z.infer<typeof postSchema>;

export type UserRegisterSchmeaType = z.infer<typeof userRegisterSchmea>;
