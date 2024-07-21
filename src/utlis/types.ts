import { z } from "zod";
import { userLoginSchema, userRegisterSchmea } from "./zodschema";

export type loginSchemaType = z.infer<typeof userLoginSchema>;

// export type postSchemaType = z.infer<typeof postSchema>;

export type UserRegisterSchmeaType = z.infer<typeof userRegisterSchmea>;

// export type UpdateProfileSchemaType = z.infer<typeof updateProfileSchema>;
