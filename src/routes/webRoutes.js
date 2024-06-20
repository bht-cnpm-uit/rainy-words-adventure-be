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
let router = Router();

let initWebRoutes = (app) => {
  // user api
  router.post("/login", handleLogin);
  router.post("/user/signup", handleSignUp);
  router.post("/user/update-info", handleUpdate);
  router.post("/user/update-password", handleChangePassword);
  //game api
  router.get("/leaderboard/", getGameLeaderboard);
  router.get("/leaderboard/get-all", getAllGameLeaderboard);
  router.get("/game/create-new-game", getNewGame);
  router.post("/game/save-game", postSaveGame);

  // admin
  router.post("/exportdata", hanldExport);

  //user api

  return app.use("/api", router);
};

module.exports = initWebRoutes;
