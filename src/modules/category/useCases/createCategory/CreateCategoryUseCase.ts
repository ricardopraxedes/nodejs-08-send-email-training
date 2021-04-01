import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { CategoriesRepository } from "../../repository/CategoriesRepository";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository
  ) {}

  async execute(name: string, description: string): Promise<void> {
    const category = await this.categoriesRepository.findByName(name);

    if (category) {
      throw new AppError("Category already exists.");
    }

    await this.categoriesRepository.create(name, description);
  }
}

export { CreateCategoryUseCase };
