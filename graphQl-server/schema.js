const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Group {
    id: ID!
    name: String
    ownerId: Int
    image: String
  }

  type User {
    id: Int!
    username: String!
    email: String!
    password: String!
    image: String
    name: String!
    phone: Int!
  }

  type Query {
    allUsers: [User]
    allGroups: [Group]
    oneUser(id: Int!): User
    oneGroup(id: Int!): Group
  }

  type Mutation {
    SignUp(
      username: String!
      email: String!
      password: String!
      image: String
      name: String!
      phone: Int!
    ): User!
  }
`;

module.exports = { typeDefs };
