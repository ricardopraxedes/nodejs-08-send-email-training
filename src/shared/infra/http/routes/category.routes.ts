import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../../../../modules/cars/category/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../../../../modules/cars/category/useCases/importCategory/ImportCategoryController";
import { ListCategoryController } from "../../../../modules/cars/category/useCases/listCategory/ListCategoriesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const categoryRoutes = Router();
const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoryRoutes.use(ensureAuthenticated);

categoryRoutes.use(ensureAdmin);

categoryRoutes.post("/", createCategoryController.handle);

categoryRoutes.get("/", listCategoryController.handle);

categoryRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoryRoutes };
