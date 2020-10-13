"use strict";

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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          password: "a",
          email: "a@a.com",
          phone: "7856784",
          username: "dummo2",
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fportfolio.newschool.edu%2Fguptm392%2Ffiles%2F2014%2F08%2FDSC_1004-2-1a1yqd6.jpg&f=1&nofb=1",
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
