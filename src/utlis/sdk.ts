import { authentication, createDirectus, rest } from "@directus/sdk";

// Client with REST support and Cross-Domain Cookies

export const sdk = createDirectus("http://localhost:8000")
  .with(authentication("session", { credentials: "include" }))
  .with(rest({ credentials: "include" }));
