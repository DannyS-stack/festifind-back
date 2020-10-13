require(`dotenv`).config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./graphQl-server/schema");
const resolvers = require("./graphQl-server/resolvers");
const db = require("./models");

const PORT = 4000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, db }),
});
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
