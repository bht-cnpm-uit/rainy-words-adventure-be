"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      levelVocab: DataTypes.INTEGER,
      vocab: DataTypes.STRING,
      topicId: DataTypes.INTEGER,
      phonetic: DataTypes.STRING,
      meaningVi: DataTypes.TEXT,
      example: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
