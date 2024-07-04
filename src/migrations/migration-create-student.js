"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      grade: {
        type: Sequelize.STRING,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      cup: {
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
    await queryInterface.dropTable("Students");
  },
};
