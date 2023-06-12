import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/user.routes";
import categoryRoutes from "./routes/category.routes";
import themeRoutes from "./routes/theme.routes";
import contentRoutes from "./routes/content.routes";

import { appConfig } from "./config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use(
  cors({
    origin: ["http://localhost:8000"],
  })
);

// Settings
app.set("port", appConfig.app.port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/theme", themeRoutes);
app.use("/content", contentRoutes);

export default app;
