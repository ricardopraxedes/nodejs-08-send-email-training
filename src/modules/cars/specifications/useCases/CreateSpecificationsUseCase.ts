import { inject, injectable } from "tsyringe";
import { SpecificationDto } from "../dto/SpecificationDto";
import { Specification } from "../infra/typeorm/model/Specification";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute(data: SpecificationDto): Promise<Specification> {
    const specification = await this.specificationsRepository.create(data);
    return specification;
  }
}

export { CreateSpecificationUseCase };
