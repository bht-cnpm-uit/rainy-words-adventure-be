"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class School_Info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  School_Info.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "School_Info",
    }
  );
  return School_Info;
};
