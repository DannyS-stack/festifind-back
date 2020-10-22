const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Group {
    id: Int!
    name: String
    ownerId: Int
    image: String
    participant: [User]
  }

  type Participant {
    id: Int
    userId: Int
    groupId: Int
  }

  type User {
    id: Int!
    username: String!
    email: String!
    password: String!
    image: String
    name: String!
    phone: String!
    token: String
    owner: [Group]
    participant: [Group]
    longitude: Float
    latitude: Float
  }

  type Query {
    allUsers: [User]
    allGroups: [Group]
    oneUser(id: Int!): User
    oneGroup(id: Int!): Group
    allGroupsofUser(id: Int!): User
    login(password: String!, email: String!): User!
  }

  type Mutation {
    SignUp(
      username: String!
      email: String!
      password: String!
      image: String
      name: String!
      phone: String!
    ): User!

    updateLocation(id: Int, longitude: Float, latitude: Float): User

    createGroup(ownerId: Int, name: String!, image: String): Group

    createParticipant(email: String, groupId: Int): Participant

    deleteParticipant(userId: Int, groupId: Int): Participant
  }
`;

module.exports = { typeDefs };
