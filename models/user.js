"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.group, { as: "owner", foreignKey: "ownerId" });
      user.hasMany(models.message);
      user.belongsToMany(models.group, {
        through: "participants",
        foreignKey: "userId",
        as: "participant",
      });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      username: DataTypes.STRING,
      image: DataTypes.STRING,
      longitude: DataTypes.FLOAT,
      latitude: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
