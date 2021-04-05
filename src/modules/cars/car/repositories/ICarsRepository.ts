import { CarDto } from "../dto/CarDto";
import { Car } from "../model/Car";

interface ICarsRepository {
  create(data: CarDto): Promise<Car>;
  list(): Promise<Car[]>;
  findByLicensePlate(license_plate: string): Promise<Car>;
}

export { ICarsRepository };
