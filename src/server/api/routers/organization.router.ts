import { z } from 'zod';

import { createTRPCRouter, protectedProcedure } from '@Api/trpc.context';
import {
  getMyOrganization,
  createMyOrganization,
  updateMyOrganization,
  removeMyOrganization,
} from '@Api/services/organization.service';

export const organizationRouter = createTRPCRouter({
  get: protectedProcedure.query(
    async ({ ctx }) => await getMyOrganization(ctx.session.user.id),
  ),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(3), domain: z.string().min(3) }))
    .mutation(
      async ({ ctx, input }) =>
        await createMyOrganization(ctx.session.user.id, input),
    ),

  update: protectedProcedure
    .input(z.object({ name: z.string().min(3), domain: z.string().min(3) }))
    .mutation(
      async ({ ctx, input }) =>
        await updateMyOrganization(ctx.session.user.id, input),
    ),

  delete: protectedProcedure.mutation(
    async ({ ctx }) => await removeMyOrganization(ctx.session.user.id),
  ),
});
