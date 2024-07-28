"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn("Levels", "difficulty", Sequelize.STRING);
  },
  down: function down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn("Levels", "difficulty");
  }
};