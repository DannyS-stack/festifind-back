"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      participant.belongsTo(models.group);
      participant.belongsTo(models.user);
    }
  }
  participant.init(
    {
      userId: DataTypes.INTEGER,
      groupId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "participant",
    }
  );
  return participant;
};
