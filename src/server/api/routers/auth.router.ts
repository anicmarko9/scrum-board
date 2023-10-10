import { publicProcedure, createTRPCRouter } from '@Api/trpc.context';

export const authRouter = createTRPCRouter({
  hello: publicProcedure.query(() => 'Hello World!'),
});
