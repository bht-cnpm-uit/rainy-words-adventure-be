import { Router } from "express";
import { homePage, handleLogin } from "../controllers/userController";
import { hanldExport } from "../controllers/adminController";
let router = Router();

let initWebRoutes = (app) => {
  // example login
  router.post("/api/login", handleLogin);
  router.get("/", homePage);
  // admin
  router.post('/api/exportdata', hanldExport);
  return app.use("/", router);
};

module.exports = initWebRoutes;
