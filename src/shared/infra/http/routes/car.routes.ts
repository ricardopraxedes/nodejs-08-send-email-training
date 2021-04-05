import { Router } from "express";
import { CreateCarController } from "../../../../modules/cars/car/useCases/CreateCar/CreateCarController";

const carRoutes = Router();

const createCarController = new CreateCarController();

carRoutes.post("/", createCarController.handle);

export { carRoutes };
