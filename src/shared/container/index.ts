import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/category/repository/CategoriesRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton("CategoriesRepository", CategoriesRepository);
container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
