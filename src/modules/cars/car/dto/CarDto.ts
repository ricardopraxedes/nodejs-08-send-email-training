import { Category } from "../../category/infra/typeorm/model/Category";

class CarDto {
  name: string;

  description: string;

  daily_rate: number;

  license_plate: string;

  fine_amount: number;

  brand: string;

  created_at: Date;

  category: Category;
}

export { CarDto };
