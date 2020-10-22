require(`dotenv`).config();
const cors = require("cors");
const express = require("express");
const { ApolloServer, graphiqlExpress } = require("apollo-server-express");
const all = require("apollo-server-express");
const { typeDefs } = require("./graphQl-server/schema");
const resolvers = require("./graphQl-server/resolvers");
const db = require("./models");
const User = require("./models").user;

const PORT = 4000;

const app = express();
app.use(cors());
app.use(express.json());

// app.use(`/graphiql`, graphiqlExpress({ endpointURL: `/graphql` }));
console.log(
  "apolloserver grapiql",
  all.ApolloServer,
  ApolloServer.graphiqlExpress
);
console.log(`graphiql:`, graphiqlExpress);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, db }),
});
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
