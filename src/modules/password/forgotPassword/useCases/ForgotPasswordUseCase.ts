import { inject, injectable } from "tsyringe";
import { IMailProvider } from "../../../../shared/container/mailProvider/IMailProvider";
import { IUsersRepository } from "../../../users/repositories/IUsersRepository";
import { ForgotPasswordError } from "./ForgotPasswordError";

@injectable()
class ForgotPasswordUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository,
    @inject("MailProvider") private mailProvider: IMailProvider
  ) {}

  async execute(email: string): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new ForgotPasswordError.UserNotFound();
    }

    this.mailProvider.sendMail(email);
  }
}

export { ForgotPasswordUseCase };
