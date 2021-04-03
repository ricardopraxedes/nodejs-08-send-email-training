import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "../typeorm";
import "../../container";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../../swagger.json";
import { router } from "./routes";
import { AppError } from "../../../errors/AppError";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      response.status(error.statusCode).json({ message: error.message });
    }

    return response
      .status(500)
      .json({ message: `Internal Server Error - ${error.message}` });
  }
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
