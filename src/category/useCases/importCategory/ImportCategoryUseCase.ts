import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";
import { CategoryDto } from "../../dto/CategoryDto";
import { CategoriesRepository } from "../../repository/CategoriesRepository";

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository
  ) { }

  loadCategories(file: Express.Multer.File): Promise<CategoryDto[]> {
    return new Promise((resolve, reject) => {
      const categories: CategoryDto[] = [];

      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const categoryExists = await this.categoriesRepository.findByName(name);

      if (!categoryExists) {
        await this.categoriesRepository.create(name, description);
      }
    });
  }
}

export { ImportCategoryUseCase };
