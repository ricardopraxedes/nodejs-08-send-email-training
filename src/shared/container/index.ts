import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/category/infra/typeorm/repository/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/category/repositories/ICategoriesRepository";
import { UsersRepository } from "../../modules/users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
