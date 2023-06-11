import { inferAsyncReturnType } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

type User = {
  email?: string;
  phone?: string;
};

export function createRouterContext({
  req,
  resHeaders,
}: FetchCreateContextFnOptions) {
  const user: User = {
    email: req.headers.get('email') ?? undefined,
    phone: req.headers.get('phone') ?? undefined,
  };
  return { req, resHeaders, user };
}

export type AppRouterContext = inferAsyncReturnType<typeof createRouterContext>;
