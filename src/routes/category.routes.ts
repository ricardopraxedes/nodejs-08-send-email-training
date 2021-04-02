import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../modules/category/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/category/useCases/importCategory/ImportCategoryController";
import { ListCategoryController } from "../modules/category/useCases/listCategory/ListCategoriesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const categoryRoutes = Router();
const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoryRoutes.use(ensureAuthenticated);

categoryRoutes.post("/", createCategoryController.handle);

categoryRoutes.get("/", listCategoryController.handle);

categoryRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoryRoutes };
