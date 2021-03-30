import { container } from "tsyringe";
import { CategoriesRepository } from "../../category/repository/CategoriesRepository";

container.registerSingleton("CategoriesRepository", CategoriesRepository);
