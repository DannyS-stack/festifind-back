"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      group.belongsTo(models.user, { as: "owner" });
      group.hasMany(models.message);
      group.belongsToMany(models.user, {
        through: "participants",
        foreignKey: "groupId",
        as: "participant",
      });
    }
  }
  group.init(
    {
      name: DataTypes.STRING,
      ownerId: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "group",
    }
  );
  return group;
};
