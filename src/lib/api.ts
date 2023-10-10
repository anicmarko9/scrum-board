import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';
import superjson from 'superjson';

import { type AppRouter } from '@Api/app.router';

const getBaseUrl = (): string =>
  typeof window !== 'undefined'
    ? ''
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${process.env.PORT ?? 3000}`;

export const api = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      },
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            if (ctx?.req) {
              return {
                ...ctx.req.headers,
                'x-ssr': '1',
              };
            }
            return {};
          },
        }),
      ],
    };
  },
  ssr: true,
});

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
