import { container } from "tsyringe";
import { CarsRepository } from "../../modules/cars/car/infra/typeorm/repository/CarsRepository";
import { ICarsRepository } from "../../modules/cars/car/repositories/ICarsRepository";
import { CategoriesRepository } from "../../modules/cars/category/infra/typeorm/repository/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/category/repositories/ICategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/specifications/infra/typeorm/repositories/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/specifications/repositories/ISpecificationsRepository";
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

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);
