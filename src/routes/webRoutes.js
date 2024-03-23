import { Router } from "express";
import { homePage, handleLogin } from "../controllers/userController";
let router = Router();

let initWebRoutes = (app) => {
  // example login
  router.post("/api/login", handleLogin);
  router.get("/", homePage);
  return app.use("/", router);
};

module.exports = initWebRoutes;
