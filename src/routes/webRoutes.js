import { Router } from "express";
import {
  homePage,
  handleLogin,
  handleSignUp,
  handleUpdate,
  handleChangePassword,
} from "../controllers/userController";
import { hanldExport } from "../controllers/adminController";
import {
  getGameLeaderboard,
  getAllGameLeaderboard,
  getNewGame,
  postSaveGame,
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

let router = Router();

let initWebRoutes = (app) => {
  //! User api
  router.post("/login", handleLogin);
  router.post("/user/signup", handleSignUp);
  router.post("/user/update-info", handleUpdate);
  //! Game api
  router.get("/leaderboard/", getGameLeaderboard);
  router.get("/leaderboard/get-all", getAllGameLeaderboard);
  router.get("/game/create-new-game/:levelid/:levelvocab", getNewGame);
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

  //! Word
  router.get("/word/get-all", getAllWord);
  router.post("/word/create", postCreateWord);
  router.post("/word/delete", postDeleteWord);
  router.post("/word/update", postUpdateWord);

  //! User api

  return app.use("/api", router);
};

module.exports = initWebRoutes;
