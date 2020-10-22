const bcrypt = require("bcrypt");
const { toJWT, toData } = require("../auth/jwt");
const { jwtSecret } = require("../config/secrets");
const jwt = require("jsonwebtoken");

const { ApolloError, AuthenticationError } = require("apollo-server-express");

const { SALT_ROUNDS } = require("../constants");

module.exports = {
  Query: {
    allUsers: async (parent, _args, { db }, info) => {
      const users = await db.user.findAll();
      return users;
    },
    oneUser: async (parent, { id }, { db }, info) => {
      const user = await db.user.findByPk(id);

      return user;
    },
    allGroups: async (parent, _args, { db }, info) => {
      const groups = await db.group.findAll();
      return groups;
    },
    oneGroup: async (parent, { id }, { db }, info) => {
      const group = await db.group.findOne({
        where: { id },
        include: [{ model: db.user, as: "participant" }],
      });
      console.log(group.dataValues);
      return group;
    },

    allGroupsofUser: async (parent, { id }, { db }, info) => {
      const user = await db.user.findByPk(id, {
        include: [
          { model: db.group, as: "owner" },
          { model: db.group, as: "participant" },
        ],
      });

      return user;
    },

    login: async (_, args, { db }) => {
      const { email, password } = args;
      let errors = {};

      try {
        if (email.trim() === "")
          return new ApolloError("email must not be empty", 400);
        if (password === "")
          return new ApolloError("password must not be empty", 400);

        if (Object.keys(errors).length > 0) {
          throw new ApolloError("bad input", 400);
        }

        const user = await db.user.findOne({
          where: { email },
          include: [
            { model: db.group, as: "owner" },
            { model: db.group, as: "participant" },
          ],
        });

        if (!user) {
          throw new ApolloError("user not found", 400);
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) {
          errors.password = "password is incorrect";
          throw new ApolloError("password is incorrect", 400);
        }
        const id = user.id;

        const token = jwt.sign({ id }, jwtSecret, {
          expiresIn: 60 * 600,
        });

        return {
          ...user.toJSON(),
          createdAt: user.createdAt.toISOString(),
          token,
        };
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },

  Mutation: {
    SignUp: async (
      parent,
      { username, email, password, phone, name, image },
      { db },
      info
    ) => {
      const user = await db.user.create({
        username,
        email,
        phone,
        name,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
        image,
      });
      delete user.dataValues["password"];
      return user;
    },

    updateLocation: async (
      parent,
      { id, longitude, latitude },
      { db },
      info
    ) => {
      const user = await db.user.findByPk(id);

      const updatedUser = await user.update({
        longitude,
        latitude,
      });

      return updatedUser;
    },

    createGroup: async (parent, { image, ownerId, name }, { db }, info) => {
      console.log("db dor group is:", db.group);
      newGroup = await db.group.create({
        image,
        ownerId,
        name,
      });

      newParticipant = await db.participant.create({
        userId: ownerId,
        groupId: newGroup.id,
      });
      return newGroup;
    },
    createParticipant: async (parent, { email, groupId }, { db }, info) => {
      const user = await db.findOne({ where: { email } });

      const newParticipant = await db.participant.create({
        userId: user.id,
        groupId,
      });

      return newParticipant;
    },
    deleteParticipant: async (parent, { userId, groupId }, { db }, info) => {
      const deletedParticipant = await db.participant.destroy({
        where: { userId: userId, groupId: groupId },
      });

      return deletedParticipant;
    },
  },
};
