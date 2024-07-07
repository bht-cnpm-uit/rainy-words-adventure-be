import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/webRoutes";
import connectDatabase from "./config/connectDatabase";
import cors from "cors"; // Added cors package

import dotenv from "dotenv";
dotenv.config();

let app = express();

// Define allowed origin
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';

// Use cors to handle CORS
app.use(cors({
  origin: allowedOrigin, // Replace with your frontend domain
  methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  allowedHeaders: "X-Requested-With,content-type",
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

connectDatabase();

let port = process.env.PORT || 1000;

app.listen(port, () => {
  console.log(`Backend rainy words adventure is running on port: ${port}`);
});
