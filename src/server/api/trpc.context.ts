import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import { type Session } from 'next-auth';
import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';

import { prisma } from '@Server/database.client';
import { auth } from '@Auth/auth.session';

type CreateContextOptions = {
  session: Session | null;
};

const createInnerTRPCContext = (opts: CreateContextOptions) => ({
  session: opts.session,
  prisma,
});

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  const session = await auth(req, res);

  return createInnerTRPCContext({ session });
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user)
    throw new TRPCError({ code: 'UNAUTHORIZED' });

  return next({ ctx: { session: { ...ctx.session, user: ctx.session.user } } });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
