import { Router } from "express";
import {
  homePage,
  handleLogin,
  handleSignUp,
  handleUpdate,
  handleChangePassword,
} from "../controllers/userController";
import { hanldExport } from "../controllers/adminController";
let router = Router();

let initWebRoutes = (app) => {
  // user api
  router.post("/api/user/login", handleLogin);
  router.post("/api/user/signup", handleSignUp);
  router.post("/api/user/update-info", handleUpdate);
  router.post("/api/user/update-password", handleChangePassword);
  router.get("/", homePage);

  // admin
  router.post("/api/exportdata", hanldExport);
  return app.use("/", router);
  //user api
};

module.exports = initWebRoutes;
