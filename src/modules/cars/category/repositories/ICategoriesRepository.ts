import { ListCarsFiltersDto } from "../../car/dto/ListCarsFiltersDto";
import { Category } from "../infra/typeorm/model/Category";

interface ICategoriesRepository {
  create(name: string, description: string): Promise<void>;

  findByName(data: ListCarsFiltersDto): Promise<Category>;

  list(): Promise<Category[]>;
}

export { ICategoriesRepository };
