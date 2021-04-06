import { validate } from "uuid";
import { SpecificationDto } from "../dto/SpecificationDto";
import { InMemorySpecificationsRepository } from "../repositories/in-memory/InMemorySpecificationsRepository";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationsUseCase";

describe("Create Specification Use Case", () => {
  let specificationsRepository: ISpecificationsRepository;
  let createSpecificationUseCase: CreateSpecificationUseCase;

  beforeEach(() => {
    specificationsRepository = new InMemorySpecificationsRepository();
    createSpecificationUseCase = new CreateSpecificationUseCase(
      specificationsRepository
    );
  });

  it("should be possible to create a new specification", async () => {
    const specificationDto = new SpecificationDto();

    Object.assign(specificationDto, {
      name: "specification name",
      description: "specification description",
    });

    const specification = await createSpecificationUseCase.execute(
      specificationDto
    );

    expect(validate(specification.id)).toBe(true);
    expect(specification).toMatchObject(specificationDto);
  });
});
