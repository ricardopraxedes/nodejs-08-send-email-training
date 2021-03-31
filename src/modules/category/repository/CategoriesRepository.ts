import { getRepository, Repository } from "typeorm";
import { Category } from "../model/Category";

class CategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create(name: string, description: string): Promise<void> {
    const category = this.repository.create({ name, description });
    await this.repository.save(category);
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
}

export { CategoriesRepository };
