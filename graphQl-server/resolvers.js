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
};
