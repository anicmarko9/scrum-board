import { authRouter } from './routers/auth.router';
import { createTRPCRouter } from './trpc.context';

export const appRouter = createTRPCRouter({
  hello: authRouter.hello,
});

export type AppRouter = typeof appRouter;
