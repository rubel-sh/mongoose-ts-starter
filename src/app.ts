import express, { Application } from "express";
// Manually import Routes
import userRoutes from "./modules/user/user.route";

const app: Application = express();

//  Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes

app.use("/api/v1/user", userRoutes);

export default app;
