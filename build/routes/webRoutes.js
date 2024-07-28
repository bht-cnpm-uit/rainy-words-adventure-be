"use strict";

var _express = require("express");
var _userController = require("../controllers/userController");
var _adminController = require("../controllers/adminController");
var _gameController = require("../controllers/gameController");
var _topicController = require("../controllers/topicController");
var _schoolController = require("../controllers/schoolController");
var _itemController = require("../controllers/itemController");
var _wordController = require("../controllers/wordController");
var _levelController = require("../controllers/levelController");
var router = (0, _express.Router)();
var initWebRoutes = function initWebRoutes(app) {
  //! User api
  router.post("/login", _userController.handleLogin);
  router.post("/user/signup", _userController.handleSignUp);
  router.post("/user/update-info", _userController.handleUpdate);
  router.get("/user/get-all-student", _userController.getAllStudent);
  router.get("/user/get-achievement/:id", _userController.getStudentAchievement);
  router.get("/user/get-info/:id", _userController.getStudentInfomation);

  //! Game api
  router.get("/leaderboard/", _gameController.getGameLeaderboard);
  router.get("/leaderboard/get-all", _gameController.getAllGameLeaderboard);
  router.post("/game/create-new-game", _gameController.postNewGame);
  router.post("/game/save-game", _gameController.postSaveGame);

  //! Admin
  router.post("/exportdata", _adminController.hanldExport);

  //! Topic
  router.get("/topic/get-all", _topicController.getAllTopic);
  router.post("/topic/create", _topicController.postCreateTopic);
  router.post("/topic/delete", _topicController.postDeleteTopic);
  router.post("/topic/update", _topicController.postUpdateTopic);

  //! School
  router.get("/school/get-all", _schoolController.getAllSchool);
  router.post("/school/create", _schoolController.postCreateSchool);
  router.post("/school/delete", _schoolController.postDeleteSchool);
  router.post("/school/update", _schoolController.postUpdateSchool);
  //! Item
  router.get("/item/get-all", _itemController.getAllItem);
  router.post("/item/create", _itemController.postCreateItem);
  router.post("/item/delete", _itemController.postDeleteItem);
  router.post("/item/update", _itemController.postUpdateItem);
  router.get("/item/get-student/:id", _itemController.getStudentItem);

  //! Word
  router.get("/word/get-all", _wordController.getAllWord);
  router.post("/word/create", _wordController.postCreateWord);
  router.post("/word/delete", _wordController.postDeleteWord);
  router.post("/word/update", _wordController.postUpdateWord);

  //! Level
  router.get("/level/get-all", _levelController.getAllLevel);
  router.post("/level/create", _levelController.postCreateLevel);
  router.post("/level/update", _levelController.postUpdateLevel);
  router.post("/level/delete", _levelController.postDeleteLevel);
  router.post("/level/add-topic", _levelController.postAddTopicLevel);
  router.post("/level/delete-topic", _levelController.postDeleteTopicLevel);
  router.get("/level/get-current/:studentid", _levelController.getCurrentLevel);

  //! User api
  router.get("/test", _gameController.testApi);
  return app.use("/api", router);
};
module.exports = initWebRoutes;