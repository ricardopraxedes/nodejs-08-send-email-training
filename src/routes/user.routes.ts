import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/CreateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
