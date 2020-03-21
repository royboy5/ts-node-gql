import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';
import models from './models';

const app = express();

/**
 * Express Server Configuration
 */
app.disable('x-powered-by');

const server: ApolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
  },
});

server.applyMiddleware({ app, path: '/graphql' });

export default app;
