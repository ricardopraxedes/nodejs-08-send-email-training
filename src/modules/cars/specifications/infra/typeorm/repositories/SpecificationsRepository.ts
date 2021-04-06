import { getRepository, Repository } from "typeorm";
import { SpecificationDto } from "../../../dto/SpecificationDto";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";
import { Specification } from "../model/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification> = getRepository(Specification);

  async create({
    name,
    description,
  }: SpecificationDto): Promise<Specification> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);

    return specification;
  }
}

export { SpecificationsRepository };
