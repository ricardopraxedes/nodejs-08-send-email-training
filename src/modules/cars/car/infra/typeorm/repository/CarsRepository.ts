import { getRepository } from "typeorm";
import { CarDto } from "../../../dto/CarDto";
import { Car } from "../model/Car";
import { ICarsRepository } from "../../../repositories/ICarsRepository";

class CarsRepository implements ICarsRepository {
  private repository = getRepository(Car);

  async create(data: CarDto): Promise<Car> {
    const car = this.repository.create({ ...data });

    await this.repository.save(car);

    return car;
  }

  async list(): Promise<Car[]> {
    return this.repository.find();
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.repository.findOne({ license_plate });
  }
}

export { CarsRepository };
