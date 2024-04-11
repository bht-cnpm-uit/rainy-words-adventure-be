import { Router } from "express";
import {
  homePage,
  handleLogin,
  handleSignUp,
} from "../controllers/userController";
import { hanldExport } from "../controllers/adminController";
let router = Router();

let initWebRoutes = (app) => {
  // user api
  router.post("/api/login", handleLogin);
  router.post("/api/signup", handleSignUp);
  router.get("/", homePage);

  // admin
  router.post("/api/exportdata", hanldExport);
  return app.use("/", router);
  //user api
};

module.exports = initWebRoutes;
