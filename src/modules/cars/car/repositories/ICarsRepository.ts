import { CarDto } from "../dto/CarDto";

import { Car } from "../infra/typeorm/model/Car";

interface ICarsRepository {
  create(data: CarDto): Promise<Car>;
  listAvailable(
    name: string,
    brand: string,
    category_id: string
  ): Promise<Car[]>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findById(id: string): Promise<Car>;
}

export { ICarsRepository };
