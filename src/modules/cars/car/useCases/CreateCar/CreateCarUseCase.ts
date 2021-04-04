import { inject, injectable } from "tsyringe";
import { Car } from "../../model/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository") private carsRepository: ICarsRepository
  ) {}

  execute(): Car {
    return null;
  }
}

export { CreateCarUseCase };
