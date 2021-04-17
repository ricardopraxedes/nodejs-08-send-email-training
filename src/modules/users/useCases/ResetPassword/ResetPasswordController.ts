import { Request, Response } from "express";
import { container } from "tsyringe";
import { ResetPasswordUseCase } from "./ResetPasswordUsecase";

class ResetPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password } = request.body;
    const { passwordToken } = request.params;

    const resetPasswordUseCase = container.resolve(ResetPasswordUseCase);

    await resetPasswordUseCase.execute(passwordToken, password);

    return response.send();
  }
}

export { ResetPasswordController };
