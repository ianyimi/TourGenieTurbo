import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from 'api/src/api/server';

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3333',

      // You can pass any HTTP headers you wish here
      // async headers() {
      //   return {
      //     authorization: getAuthCookie(),
      //   };
      // },
    }),
  ],
});
