import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';

import * as middlewares from './middlewares';
import { appRouter } from './api/server';
import { createRouterContext } from './api/context';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createRouterContext,
  }),
);

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
