import { AppError } from "../../../../../shared/errors/AppError";
import { SpecificationDto } from "../../../specifications/dto/SpecificationDto";
import { InMemorySpecificationsRepository } from "../../../specifications/repositories/in-memory/InMemorySpecificationsRepository";
import { CarDto } from "../../dto/CarDto";
import { InMemoryCarsRepository } from "../../repositories/in-memory/InMemoryCarsRepository";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

describe("Create car specification", () => {
  let inMemoryCarsRepository: InMemoryCarsRepository;
  let inMemorySpecificationsRepository: InMemorySpecificationsRepository;
  let createCarSpecificationUseCase: CreateCarSpecificationUseCase;

  beforeEach(() => {
    inMemoryCarsRepository = new InMemoryCarsRepository();
    inMemorySpecificationsRepository = new InMemorySpecificationsRepository();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      inMemoryCarsRepository,
      inMemorySpecificationsRepository
    );
  });

  it("should be possible to create specification for a car", async () => {
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

    const specificationDto = new SpecificationDto();

    Object.assign(specificationDto, {
      name: "specification name",
      description: "specification description",
    });

    const specification = await inMemorySpecificationsRepository.create(
      specificationDto
    );

    const car = await inMemoryCarsRepository.create(carDto);

    const carWithSpecification = await createCarSpecificationUseCase.execute(
      car.id,
      [specification.id]
    );

    expect(carWithSpecification.specifications).toEqual([specification]);
  });

  it("should not be possible to create specification if car not found", () => {
    const car_id = "1";

    const specification_ids: string[] = ["1", "2"];

    expect(async () => {
      await createCarSpecificationUseCase.execute(car_id, specification_ids);
    }).rejects.toEqual(new AppError("Car not found.", 404));
  });
});
