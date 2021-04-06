import { SpecificationDto } from "../dto/SpecificationDto";
import { Specification } from "../infra/typeorm/model/Specification";

interface ISpecificationsRepository {
  create(data: SpecificationDto): Promise<Specification>;
}

export { ISpecificationsRepository };
