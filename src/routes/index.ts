import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/categories", categoryRoutes);

router.use("/users", userRoutes);

export { router };
