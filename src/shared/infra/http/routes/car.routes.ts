import { Router } from "express";
import { CreateCarController } from "../../../../modules/cars/car/useCases/CreateCar/CreateCarController";
import { ListAvailableCarsController } from "../../../../modules/cars/car/useCases/ListAvailableCars/ListAvailableCarsController";

const carRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carRoutes.post("/", createCarController.handle);

carRoutes.get("/available", listAvailableCarsController.handle);

export { carRoutes };
