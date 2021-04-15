import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../shared/errors/AppError";
import { ISpecificationsRepository } from "../../../specifications/repositories/ISpecificationsRepository";
import { Car } from "../../infra/typeorm/model/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository") private carsRepository: ICarsRepository,
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute(car_id: string, specification_ids: string[]): Promise<Car> {
    const car = await this.carsRepository.findById(car_id);

    if (!car) {
      throw new AppError("Car not found.", 404);
    }

    const specifications = await this.specificationsRepository.findByIds(
      specification_ids
    );

    car.specifications = specifications;

    this.carsRepository.create(car);

    return car;
  }
}

export { CreateCarSpecificationUseCase };
