"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "messages",
      [
        {
          content: "this is awesome",
          userId: 1,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "woohooo",
          userId: 2,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "thanks to festifind I can finally find you guys",
          userId: 3,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "fun",
          userId: 2,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "yes",
          userId: 2,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "this is awesome",
          userId: 1,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "meet me at the large tent",
          userId: 5,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "thanks to festifind I can finally find you guys",
          userId: 3,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "fun",
          userId: 6,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "cool",
          userId: 6,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "awesome",
          userId: 4,
          groupId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "awesome",
          userId: 6,
          groupId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "awesome",
          userId: 6,
          groupId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "thanks to festifind I can finally find you guys",
          userId: 3,
          groupId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "fun",
          userId: 4,
          groupId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "awesome",
          userId: 5,
          groupId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "awesome",
          userId: 6,
          groupId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "awesome",
          userId: 6,
          groupId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "cool",
          userId: 6,
          groupId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("messages", null, {});
  },
};
