import { getRepository } from "typeorm";
import { CarDto } from "../../dto/CarDto";
import { Car } from "../../model/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

class CarRepository implements ICarsRepository {
  private repository = getRepository(Car);

  create(data: CarDto): Car {
    const car = this.repository.create({ ...data });

    this.repository.save(car);

    return car;
  }
}

export { CarRepository };
