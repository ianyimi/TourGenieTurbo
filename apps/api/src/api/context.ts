import { inferAsyncReturnType } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

export type User = {
  email?: string;
  phone?: string;
};

export function createRouterContext({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) {
  const user: User = {
    email: req.headers.get('email') ?? undefined,
    phone: req.headers.get('phone') ?? undefined,
  };
  return { req, res, user };
}

export type AppRouterContext = inferAsyncReturnType<typeof createRouterContext>;
