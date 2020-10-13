require(`dotenv`).config();
const User = require("./models").user;
const Message = require("./models").message;
const Group = require("./models").group;
const Participant = require("./models").participant;

const user = async () => {
  const founduser = await User.findAll();
  console.log(founduser);
};

const specificuser = async () => {
  const foundspecificuser = await User.findByPk(3);
  console.log(foundspecificuser);
};

const specificgroup = async () => {
  const foundspecificgroup = await Group.findByPk(3);
  console.log(foundspecificgroup);
};

const specificgroupwithusers = async () => {
  const foundspecificgroupwithusers = await Group.findByPk(1, {
    include: [
      { model: User, as: "participant" },
      { model: Message },
      { model: User, as: "owner" },
    ],
  });
  console.log(foundspecificgroupwithusers.get({ plain: true }));
};

const messages = async () => {
  const foundmessages = await Message.findAll();
  console.log(foundmessages);
};

const groups = async () => {
  const foundgroups = await Group.findAll();
  console.log(foundgroups);
};

const groupswithmessages = async () => {
  const foundgroupswithmessages = await Group.findAll({ include: Message });
  console.log(foundgroupswithmessages);
};

const userwithmessages = async () => {
  const founduserwithmessages = await User.findAll({ include: Message });
  console.log(founduserwithmessages);
};

specificgroupwithusers();
