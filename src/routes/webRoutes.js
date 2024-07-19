import { Router } from "express";
import {
  homePage,
  handleLogin,
  handleSignUp,
  handleUpdate,
  handleChangePassword,
  getAllStudent,
  getStudentAchievement,
  getStudentInfomation,
} from "../controllers/userController";
import { hanldExport } from "../controllers/adminController";
import {
  getGameLeaderboard,
  getAllGameLeaderboard,
  postNewGame,
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
  getStudentItem,
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
  getCurrentLevel,
} from "../controllers/levelController";

let router = Router();

let initWebRoutes = (app) => {
  //! User api
  router.post("/login", handleLogin);
  router.post("/user/signup", handleSignUp);
  router.post("/user/update-info", handleUpdate);
  router.get("/user/get-all-student", getAllStudent);
  router.get("/user/get-achievement/:id", getStudentAchievement);
  router.get("/user/get-info/:id", getStudentInfomation);

  //! Game api
  router.get("/leaderboard/", getGameLeaderboard);
  router.get("/leaderboard/get-all", getAllGameLeaderboard);
  router.post("/game/create-new-game", postNewGame);
  router.post("/game/save-game", postSaveGame);

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
  router.get("/item/get-student/:id", getStudentItem);

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
  router.get("/level/get-current/:studentid", getCurrentLevel);

  //! User api
  router.get("/test", testApi);

  return app.use("/api", router);
};

module.exports = initWebRoutes;
