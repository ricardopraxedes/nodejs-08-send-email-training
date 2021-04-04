import { CarDto } from "../dto/CarDto";
import { Car } from "../model/Car";

interface ICarsRepository {
  create(data: CarDto): Car;
}

export { ICarsRepository };
