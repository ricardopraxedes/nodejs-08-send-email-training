import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

class CreateCarSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { car_id } = request.params;
    const { specification_ids } = request.body;

    const createCarSpecificationUseCase = container.resolve(
      CreateCarSpecificationUseCase
    );

    createCarSpecificationUseCase.execute(car_id, specification_ids);

    return response.json();
  }
}

export { CreateCarSpecificationController };
