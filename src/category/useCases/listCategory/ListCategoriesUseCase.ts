import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repository/CategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();
    return categories;
  }
}

export { ListCategoryUseCase };
