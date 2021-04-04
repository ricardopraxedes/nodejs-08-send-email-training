import { Category } from "../infra/typeorm/model/Category";

interface ICategoriesRepository {
  create(name: string, description: string): Promise<void>;

  findByName(name: string): Promise<Category>;

  list(): Promise<Category[]>;
}

export { ICategoriesRepository };
