import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import userRoutes from "./routes/user.routes";
import categoryRoutes from "./routes/category.routes";
import themeRoutes from "./routes/theme.routes";

import { appConfig } from "./config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Settings
app.set("port", appConfig.app.port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/theme", themeRoutes);

export default app;
