import { authentication, createDirectus, rest } from "@directus/sdk";

const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

export const sdk = createDirectus(apiUrl)
  .with(
    authentication("session", { credentials: "include", autoRefresh: true }),
  )
  .with(rest({ credentials: "include" }));
