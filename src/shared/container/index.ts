import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/category/repository/CategoriesRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/CreateUserRepository";

container.registerSingleton("CategoriesRepository", CategoriesRepository);
container.registerSingleton("UsersRepository", UsersRepository);
