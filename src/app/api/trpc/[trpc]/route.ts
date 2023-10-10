import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { type AppRouter, appRouter } from '@Api/app.router';

const handler = (req: Request): Promise<Response> =>
  fetchRequestHandler<AppRouter>({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}) as any,
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
