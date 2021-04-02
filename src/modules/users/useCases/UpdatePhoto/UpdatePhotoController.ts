import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePhotoUseCase } from "./UpdatePhotoUseCase";

class UpdatePhotoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user } = request;
    const photoUrl = request.file.filename;

    const updatePhotoUseCase = container.resolve(UpdatePhotoUseCase);

    await updatePhotoUseCase.execute(user, photoUrl);

    return response.status(204).send();
  }
}

export { UpdatePhotoController };
