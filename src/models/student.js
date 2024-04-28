"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.School);
      Student.belongsToMany(models.Level, {
        through: "Game",
      });
      Student.belongsToMany(models.Word, {
        through: "Student_Word",
      });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      grade: DataTypes.STRING,
      birthday: DataTypes.DATE,
      phoneNumber: DataTypes.STRING,
      password: DataTypes.STRING,
      schoolId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
