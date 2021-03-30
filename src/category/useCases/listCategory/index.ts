import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

export default (): ListCategoryController => {
  const categoryRepository = new CategoriesRepository();

  const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);

  const listCategoryController = new ListCategoryController(
    listCategoryUseCase
  );

  return listCategoryController;
};
