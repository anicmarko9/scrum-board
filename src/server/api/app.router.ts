import { createTRPCRouter } from './trpc.context';
import { organizationRouter } from './routers/organization.router';

export const appRouter = createTRPCRouter({
  organization: organizationRouter,
});

export type AppRouter = typeof appRouter;
