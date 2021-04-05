import { validate } from "uuid";
import { AppError } from "../../../../../errors/AppError";
import { CarDto } from "../../dto/CarDto";
import { InMemoryCarsRepository } from "../../infra/in-memory/InMemoryCarsRepository";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CreateCarUseCase } from "./CreateCarUseCase";

describe("Create car use case", () => {
  let carRepository: ICarsRepository;
  let createCarUseCase: CreateCarUseCase;

  beforeEach(() => {
    carRepository = new InMemoryCarsRepository();
    createCarUseCase = new CreateCarUseCase(carRepository);
  });

  it("should be possible to create a new car as available", async () => {
    const carDto = new CarDto();

    Object.assign(carDto, {
      name: "name",

      description: "description",

      daily_rate: 100,

      license_plate: "XXXX-XXX",

      fine_amount: 50,

      brand: "brand",

      category: null,
    });

    const car = await createCarUseCase.execute(carDto);

    expect(validate(car.id)).toBe(true);

    expect(car).toMatchObject({
      ...carDto,
      available: true,
    });
  });

  it("should not be possible to create two cars with the same license_plate ", async () => {
    const carDto = new CarDto();

    Object.assign(carDto, {
      name: "name",

      description: "description",

      daily_rate: 100,

      license_plate: "XXXX-XXX",

      fine_amount: 50,

      brand: "brand",

      category: null,
    });

    await createCarUseCase.execute(carDto);

    expect(async () => {
      await createCarUseCase.execute(carDto);
    }).rejects.toBeInstanceOf(AppError);
  });
});
