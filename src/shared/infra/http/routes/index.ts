import { Router } from "express";
import { authenticationRoutes } from "./authentication.routes";
import { categoryRoutes } from "./category.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/categories", categoryRoutes);

router.use("/users", userRoutes);

router.use(authenticationRoutes);

export { router };
