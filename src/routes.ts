import { Router } from "express";
import multer from "multer";
import createCategoryController from "./category/useCases/createCategory";
import listCategoryController from "./category/useCases/listCategory";
import importCategoryController from "./category/useCases/importCategory";

const categoryRoutes = Router();
const upload = multer({ dest: "./tmp" });

categoryRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

categoryRoutes.get("/", (request, response) => {
  return listCategoryController().handle(request, response);
});

categoryRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController().handle(request, response);
});

export { categoryRoutes };
