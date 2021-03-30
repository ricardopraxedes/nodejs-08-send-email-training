import express from "express";
import "./database";
import "./shared/container";
import { categoryRoutes } from "./routes";

const app = express();

app.use(express.json());

app.use("/categories", categoryRoutes);

app.listen(3333);

export { app };
