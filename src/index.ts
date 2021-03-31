import express from "express";
import "./database";
import "./shared/container";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
