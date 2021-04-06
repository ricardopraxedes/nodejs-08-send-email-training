import { Router } from "express";
import { CreateSpecificationController } from "../../../../modules/cars/specifications/useCases/CreateSpecificationsController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
