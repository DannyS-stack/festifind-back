"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          password: "a",
          email: "jd@jd.com",
          phone: "12455467",
          username: "coolJD",
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fportfolio.newschool.edu%2Fguptm392%2Ffiles%2F2014%2F08%2FDSC_1004-2-1a1yqd6.jpg&f=1&nofb=1",
          longitude: 4.895168,
          latitude: 52.370216,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "michael",
          password: "a",
          email: "m@m.com",
          phone: "3567325",
          username: "themichael",
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fportfolio.newschool.edu%2Fguptm392%2Ffiles%2F2014%2F08%2FDSC_1004-2-1a1yqd6.jpg&f=1&nofb=1",
          longitude: 4.753375,
          latitude: 52.632381,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "nancy",
          password: "a",
          email: "nance@nnn.com",
          phone: "4636336",
          username: "nnnnnn",
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fportfolio.newschool.edu%2Fguptm392%2Ffiles%2F2014%2F08%2FDSC_1004-2-1a1yqd6.jpg&f=1&nofb=1",
          longitude: 5.05681,
          latitude: 52.64146,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          email: "a@a.com",
          phone: "7856784",
          username: "dummo2",
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fportfolio.newschool.edu%2Fguptm392%2Ffiles%2F2014%2F08%2FDSC_1004-2-1a1yqd6.jpg&f=1&nofb=1",
          longitude: 4.980004,
          latitude: 52.584597,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy3",
          password: "a",
          email: "a3@ja.com",
          phone: "9678447",
          username: "dummo3",
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fportfolio.newschool.edu%2Fguptm392%2Ffiles%2F2014%2F08%2FDSC_1004-2-1a1yqd6.jpg&f=1&nofb=1",
          longitude: 4.975974,
          latitude: 52.590097,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy4",
          password: "a",
          email: "a4@ja.com",
          phone: "9087886",
          username: "dummo4",
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fportfolio.newschool.edu%2Fguptm392%2Ffiles%2F2014%2F08%2FDSC_1004-2-1a1yqd6.jpg&f=1&nofb=1",
          longitude: 4.955555,
          latitude: 52.510097,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bob",
          password: "a",
          email: "bob@bob.com",
          phone: "1244131",
          username: "bobbo",
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fportfolio.newschool.edu%2Fguptm392%2Ffiles%2F2014%2F08%2FDSC_1004-2-1a1yqd6.jpg&f=1&nofb=1",
          longitude: 4.975974,
          latitude: 52.445585,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
