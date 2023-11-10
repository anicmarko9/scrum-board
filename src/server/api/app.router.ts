import { createTRPCRouter } from './trpc.context';
import { organizationRouter } from './routers/organization.router';
import { boardRouter } from './routers/board.router';

export const appRouter = createTRPCRouter({
  organization: organizationRouter,
  board: boardRouter,
});

export type AppRouter = typeof appRouter;
