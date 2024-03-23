"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      // grade: DataTypes.STRING,
      // birthday: DataTypes.DATE,
      // listWordId: DataTypes.STRING,
      // username: DataTypes.STRING,
      // password: DataTypes.STRING,
      // schoolId: DataTypes.INTEGER,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      listWordId: {
        type: Sequelize.TEXT,
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      schoolId: {
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
