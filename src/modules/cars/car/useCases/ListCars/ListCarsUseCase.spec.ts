import { InMemoryCarsRepository } from "../../repositories/in-memory/InMemoryCarsRepository";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { ListCarsUseCase } from "./ListCarsUseCase";
import { CarDto } from "../../dto/CarDto";

describe("List cars use case", () => {
  let carsRepository: ICarsRepository;
  let listCarUseCase: ListCarsUseCase;

  beforeEach(() => {
    carsRepository = new InMemoryCarsRepository();
    listCarUseCase = new ListCarsUseCase(carsRepository);
  });

  it("should list all available cars", async () => {
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

    const car = await carsRepository.create(carDto);

    const cars = await listCarUseCase.execute();

    expect(cars).toEqual([car]);
  });

  it("should list all available cars by name", async () => {
    const firstCarDto = new CarDto();

    Object.assign(firstCarDto, {
      name: "Carro Um",

      description: "description",

      daily_rate: 100,

      license_plate: "XXXX-XXX",

      fine_amount: 50,

      brand: "Marca Um",

      category: null,
    });

    const secondCarDto = new CarDto();

    Object.assign(secondCarDto, {
      name: "Carro Dois",

      description: "description",

      daily_rate: 100,

      license_plate: "XXXX-XXX",

      fine_amount: 50,

      brand: "Marca Dois",

      category: null,
    });

    const firstCar = await carsRepository.create(firstCarDto);
    const secondCar = await carsRepository.create(secondCarDto);

    const cars = await listCarUseCase.execute({ name: firstCar.name });

    expect(cars).toEqual([firstCar]);
  });

  it("should list all available cars by brand", async () => {
    const firstCarDto = new CarDto();

    Object.assign(firstCarDto, {
      name: "Carro Um",

      description: "description",

      daily_rate: 100,

      license_plate: "XXXX-XXX",

      fine_amount: 50,

      brand: "Marca Um",

      category: null,
    });

    const secondCarDto = new CarDto();

    Object.assign(secondCarDto, {
      name: "Carro Dois",

      description: "description",

      daily_rate: 100,

      license_plate: "XXXX-XXX",

      fine_amount: 50,

      brand: "Marca Dois",

      category: null,
    });

    await carsRepository.create(firstCarDto);
    const secondCar = await carsRepository.create(secondCarDto);

    const cars = await listCarUseCase.execute({ brand: secondCar.brand });

    expect(cars).toEqual([secondCar]);
  });

  it("should list all available cars by brand", async () => {
    const firstCarDto = new CarDto();

    Object.assign(firstCarDto, {
      name: "Carro Um",

      description: "description",

      daily_rate: 100,

      license_plate: "XXXX-XXX",

      fine_amount: 50,

      brand: "Marca Um",

      category: null,
    });

    const secondCarDto = new CarDto();

    Object.assign(secondCarDto, {
      name: "Carro Dois",

      description: "description",

      daily_rate: 100,

      license_plate: "XXXX-XXX",

      fine_amount: 50,

      brand: "Marca Dois",

      category: null,
    });

    await carsRepository.create(firstCarDto);
    const secondCar = await carsRepository.create(secondCarDto);

    const cars = await listCarUseCase.execute({ brand: secondCar.brand });

    expect(cars).toEqual([secondCar]);
  });

  it("should list all available cars by category_id", async () => {
    const firstCarDto = new CarDto();

    Object.assign(firstCarDto, {
      name: "Carro Um",

      description: "description",

      daily_rate: 100,

      license_plate: "XXXX-XXX",

      fine_amount: 50,

      brand: "Marca Um",

      category_id: "A",
    });

    const secondCarDto = new CarDto();

    Object.assign(secondCarDto, {
      name: "Carro Dois",

      description: "description",

      daily_rate: 100,

      license_plate: "XXXX-XXX",

      fine_amount: 50,

      brand: "Marca Dois",

      category_id: "B",
    });

    await carsRepository.create(firstCarDto);
    const secondCar = await carsRepository.create(secondCarDto);

    const cars = await listCarUseCase.execute({
      category_id: secondCar.category_id,
    });

    expect(cars).toEqual([secondCar]);
  });
});
