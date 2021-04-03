import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../../../../modules/users/useCases/CreateUser/CreateUserController";
import { UpdatePhotoController } from "../../../../modules/users/useCases/UpdatePhoto/UpdatePhotoController";

const userRoutes = Router();

const uploadPhoto = multer(uploadConfig.upload("./tmp/user-photos"));

const createUserController = new CreateUserController();
const updatePhotoController = new UpdatePhotoController();

userRoutes.post("/", createUserController.handle);

userRoutes.patch(
  "/photo",
  ensureAuthenticated,
  uploadPhoto.single("photo"),
  updatePhotoController.handle
);

export { userRoutes };
