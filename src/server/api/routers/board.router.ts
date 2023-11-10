import { z } from 'zod';

import { createTRPCRouter, protectedProcedure } from '@Api/trpc.context';

import {
  getMyBoard,
  createMyBoard,
  updateMyBoard,
  removeMyBoard,
} from '@Api/services/board.service';

export const boardRouter = createTRPCRouter({
  get: protectedProcedure.query(
    async ({ ctx }) => await getMyBoard(ctx.session.user.id),
  ),
  create: protectedProcedure
    .input(z.object({ name: z.string().min(3) }))
    .mutation(
      async ({ ctx, input }) => await createMyBoard(ctx.session.user.id, input),
    ),

  update: protectedProcedure
    .input(z.object({ name: z.string().min(3) }))
    .mutation(
      async ({ ctx, input }) => await updateMyBoard(ctx.session.user.id, input),
    ),

  delete: protectedProcedure.mutation(
    async ({ ctx }) => await removeMyBoard(ctx.session.user.id),
  ),
});
