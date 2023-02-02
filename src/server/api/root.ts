import { createTRPCRouter } from "./trpc";
import { shortUrlRouter } from "./routers/shortUrl";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  shortUrlRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
