import { Router } from "express";
import { CreateCarController } from "../../../../modules/cars/car/useCases/CreateCar/CreateCarController";
import { ListAvailableCarsController } from "../../../../modules/cars/car/useCases/ListAvailableCars/ListAvailableCarsController";
import { CreateCarSpecificationController } from "../../../../modules/cars/car/useCases/CreateCarSpecification/CreateCarSpecificationController";

const carRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();

carRoutes.post("/", createCarController.handle);

carRoutes.post(
  "/specifications/:car_id",
  createCarSpecificationController.handle
);

carRoutes.get("/available", listAvailableCarsController.handle);

export { carRoutes };
