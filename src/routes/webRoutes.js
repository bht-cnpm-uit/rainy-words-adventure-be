import { Router } from "express";
import {
  homePage,
  handleLogin,
  handleSignUp,
  handleUpdate,
  handleChangePassword,
} from "../controllers/userController";
import { hanldExport } from "../controllers/adminController";
import { getGameLeaderboard } from "../controllers/gameController";
let router = Router();

let initWebRoutes = (app) => {
  // user api
  router.post("/api/login", handleLogin);
  router.post("/api/user/signup", handleSignUp);
  router.post("/api/user/update-info", handleUpdate);
  router.post("/api/user/update-password", handleChangePassword);
  //game api
  router.get("/api/leaderboard/", getGameLeaderboard);

  // admin
  router.post("/api/exportdata", hanldExport);

  //user api

  router.get("/", homePage);
  return app.use("/", router);
};

module.exports = initWebRoutes;
