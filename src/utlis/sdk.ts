import { authentication, createDirectus, rest } from "@directus/sdk";
import { DirectusSchema } from "./types";

// Client with REST support and Cross-Domain Cookies
const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

export const sdk = createDirectus<DirectusSchema>(apiUrl)
  .with(authentication("session", { credentials: "include" }))
  .with(rest({ credentials: "include" }));
