import { CarDto } from "../../dto/CarDto";
import { ListCarsFiltersDto } from "../../dto/ListCarsFiltersDto";

import { Car } from "../../infra/typeorm/model/Car";
import { ICarsRepository } from "../ICarsRepository";

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

  async listAvailable({
    name,
    brand,
    category_id,
  }: ListCarsFiltersDto): Promise<Car[]> {
    const cars = this.cars.filter((car) => {
      if (car.available === true) {
        if (name) {
          return car.name === name;
        }
        if (brand) {
          return car.brand === brand;
        }
        if (category_id) {
          return car.category.id === category_id;
        }
        return car;
      }
      return null;
    });

    return cars;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }
}

export { InMemoryCarsRepository };
