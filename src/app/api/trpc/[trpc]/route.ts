import { createNextApiHandler } from '@trpc/server/adapters/next';

import { type AppRouter, appRouter } from '@Server/api/app.router';
import { createTRPCContext } from '@Server/api/trpc.context';

const handler = (req: Request) =>
  createNextApiHandler<AppRouter>({
    router: appRouter,
    createContext: createTRPCContext,
    onError:
      process.env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
            );
          }
        : undefined,
    batching: {
      enabled: true,
    },
  });

export { handler as GET, handler as POST };
