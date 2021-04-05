import { CarDto } from "../../dto/CarDto";
import { Car } from "../../model/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

class InMemoryCarsRepository implements ICarsRepository {
  private cars: Car[] = [];

  async create(data: CarDto): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      ...data,
    });

    this.cars.push(car);

    return car;
  }

  async list(): Promise<Car[]> {
    return this.cars;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }
}

export { InMemoryCarsRepository };
