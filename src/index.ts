import express from "express";
import "./database";
import "./shared/container";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { categoryRoutes } from "./routes";

const app = express();

app.use(express.json());

app.use("/categories", categoryRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333);

export { app };
