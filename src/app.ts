import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

/**
 * Express Server Configuration
 */
app.disable('x-powered-by');

const schema = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
  }
`;

const resolvers = {
  Query: {
    me: (): { username: string } => {
      return {
        username: 'Robin Wieruch',
      };
    },
  },
};

const server: ApolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

export default app;
