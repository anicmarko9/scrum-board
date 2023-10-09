import { publicProcedure, createTRPCRouter } from '../trpc.context';

export const authRouter = createTRPCRouter({
  hello: publicProcedure.query(() => 'Hello World'),
});
