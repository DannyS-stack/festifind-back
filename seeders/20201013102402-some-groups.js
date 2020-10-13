"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "groups",
      [
        {
          name: "gang",
          ownerId: 1,
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffusiontantra.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fgroup-of-young-people.jpg&f=1&nofb=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "group",
          ownerId: 2,
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffusiontantra.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fgroup-of-young-people.jpg&f=1&nofb=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "woohoo",
          ownerId: 3,
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffusiontantra.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fgroup-of-young-people.jpg&f=1&nofb=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "letsgooo",
          ownerId: 4,
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffusiontantra.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fgroup-of-young-people.jpg&f=1&nofb=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "superparty",
          ownerId: 5,
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffusiontantra.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fgroup-of-young-people.jpg&f=1&nofb=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "jippie",
          ownerId: 6,
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffusiontantra.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fgroup-of-young-people.jpg&f=1&nofb=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "awsomegroup",
          ownerId: 4,
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffusiontantra.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fgroup-of-young-people.jpg&f=1&nofb=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("groups", null, {});
  },
};
