import { Request, Response } from "express";
import { container } from "tsyringe";
import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase";

class ForgotPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const forgotPasswordUseCase = container.resolve(ForgotPasswordUseCase);

    await forgotPasswordUseCase.execute(email);

    return response.send();
  }
}

export { ForgotPasswordController };
