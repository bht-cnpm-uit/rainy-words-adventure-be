import { Router } from "express";
import {
  homePage,
  handleLogin,
  handleSignUp,
  handleUpdate,
  handleChangePassword,
  getAllStudent,
} from "../controllers/userController";
import { hanldExport } from "../controllers/adminController";
import {
  getGameLeaderboard,
  getAllGameLeaderboard,
  getNewGame,
  postSaveGame,
  testApi,
} from "../controllers/gameController";

import {
  getAllTopic,
  postCreateTopic,
  postDeleteTopic,
  postUpdateTopic,
} from "../controllers/topicController";

import {
  getAllSchool,
  postCreateSchool,
  postDeleteSchool,
  postUpdateSchool,
} from "../controllers/schoolController";

import {
  getAllItem,
  postCreateItem,
  postDeleteItem,
  postUpdateItem,
} from "../controllers/itemController";

import {
  getAllWord,
  postCreateWord,
  postDeleteWord,
  postUpdateWord,
} from "../controllers/wordController";

import {
  getAllLevel,
  postCreateLevel,
  postUpdateLevel,
  postDeleteLevel,
  postAddTopicLevel,
  postDeleteTopicLevel,
} from "../controllers/levelController";

let router = Router();

let initWebRoutes = (app) => {
  //! User api
  router.post("/login", handleLogin);
  router.post("/user/signup", handleSignUp);
  router.post("/user/update-info", handleUpdate);
  router.get("/user/get-all-student", getAllStudent);

  //! Game api
  router.get("/leaderboard/", getGameLeaderboard);
  router.get("/leaderboard/get-all", getAllGameLeaderboard);
  router.get("/game/create-new-game/:levelid/:levelvocab", getNewGame);
  router.post("/game/save-game", postSaveGame);
  //! Game item
  router.get("/game-item/save");
  router.get("/game-item/info/:studentid");
  router.get("/game-item/check-up");

  //! Admin
  router.post("/exportdata", hanldExport);

  //! Topic
  router.get("/topic/get-all", getAllTopic);
  router.post("/topic/create", postCreateTopic);
  router.post("/topic/delete", postDeleteTopic);
  router.post("/topic/update", postUpdateTopic);

  //! School
  router.get("/school/get-all", getAllSchool);
  router.post("/school/create", postCreateSchool);
  router.post("/school/delete", postDeleteSchool);
  router.post("/school/update", postUpdateSchool);
  //! Item
  router.get("/item/get-all", getAllItem);
  router.post("/item/create", postCreateItem);
  router.post("/item/delete", postDeleteItem);
  router.post("/item/update", postUpdateItem);

  //! Word
  router.get("/word/get-all", getAllWord);
  router.post("/word/create", postCreateWord);
  router.post("/word/delete", postDeleteWord);
  router.post("/word/update", postUpdateWord);

  //! Level
  router.get("/level/get-all", getAllLevel);
  router.post("/level/create", postCreateLevel);
  router.post("/level/update", postUpdateLevel);
  router.post("/level/delete", postDeleteLevel);
  router.post("/level/add-topic", postAddTopicLevel);
  router.post("/level/delete-topic", postDeleteTopicLevel);
  router.post("/level/unlock", postUnlockLevel);
  router.get("/level/get-current/:studentid", getCurrentLevel);

  //! User api
  router.get("/test", testApi);

  return app.use("/api", router);
};

module.exports = initWebRoutes;
