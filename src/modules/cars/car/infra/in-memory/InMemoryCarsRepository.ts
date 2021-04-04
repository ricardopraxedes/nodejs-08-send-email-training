import { CarDto } from "../../dto/CarDto";
import { Car } from "../../model/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

class InMemoryCarsRepository implements ICarsRepository {
  private cars: Car[];

  create(data: CarDto): Car {
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
}

export { InMemoryCarsRepository };
