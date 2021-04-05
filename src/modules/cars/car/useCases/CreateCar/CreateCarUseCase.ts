import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppError";
import { CarDto } from "../../dto/CarDto";
import { Car } from "../../infra/typeorm/model/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository") private carsRepository: ICarsRepository
  ) {}

  async execute(data: CarDto): Promise<Car> {
    const carExists = await this.carsRepository.findByLicensePlate(
      data.license_plate
    );

    if (carExists) {
      throw new AppError("License plate already in use.");
    }

    const car = await this.carsRepository.create(data);

    return car;
  }
}

export { CreateCarUseCase };
