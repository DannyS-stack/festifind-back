const bcrypt = require("bcrypt");
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
      const group = await db.group.findByPk(id);
      return group;
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
  },
};
