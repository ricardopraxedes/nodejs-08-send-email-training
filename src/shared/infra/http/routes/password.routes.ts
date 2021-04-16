import { Router } from "express";
import { ForgotPasswordController } from "../../../../modules/users/useCases/ForgotPassword/useCases/ForgotPasswordController";

const passwordRoutes = Router();

const forgotPasswordController = new ForgotPasswordController();

passwordRoutes.post("/forgot", forgotPasswordController.handle);

export { passwordRoutes };
