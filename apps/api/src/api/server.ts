import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { postRouter } from './routers/post';
import type { User } from './context';

export const t = initTRPC.create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;

export const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query((opts) => {
    opts.input; // string
    return { id: opts.input, name: 'Bilbo' };
  }),
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
  // post: postRouter,
  // createUser: t.procedure
  //   .input(z.object({ name: z.string().min(5) }))
  //   .mutation(async (opts) => {
  //     // use your ORM of choice
  //     return await UserModel.create({
  //       data: opts.input,
  //     });
  //   }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
