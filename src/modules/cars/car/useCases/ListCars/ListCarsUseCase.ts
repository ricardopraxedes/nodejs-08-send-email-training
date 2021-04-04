import { inject, injectable } from "tsyringe";
import { Car } from "../../model/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class ListCarsUseCase {
  constructor(
    @inject("CarsRepository") private carsRepository: ICarsRepository
  ) {}

  execute(): Promise<Car[]> {
    return null;
  }
}

export { ListCarsUseCase };
