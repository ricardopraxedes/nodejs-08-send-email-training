import { SpecificationDto } from "../../dto/SpecificationDto";
import { Specification } from "../../infra/typeorm/model/Specification";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

class InMemorySpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  async create(data: SpecificationDto): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      ...data,
    });

    this.specifications.push(specification);

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = this.specifications.filter((specification) =>
      ids.some((id) => id === specification.id)
    );

    return specifications;
  }
}

export { InMemorySpecificationsRepository };
