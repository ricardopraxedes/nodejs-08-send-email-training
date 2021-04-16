import { resolve } from "path";
import { inject, injectable } from "tsyringe";
import { v4 as uuidv4 } from "uuid";
import { IDateProvider } from "../../../../../shared/container/providers/dateProvider/IDateProvider";
import { IMailProvider } from "../../../../../shared/container/providers/mailProvider/IMailProvider";
import { IUsersPasswordTokensRepository } from "../../../repositories/IUsersPasswordTokensRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ForgotPasswordError } from "./ForgotPasswordError";

@injectable()
class ForgotPasswordUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository,
    @inject("MailProvider") private mailProvider: IMailProvider,
    @inject("DateProvider") private dateProvider: IDateProvider,
    @inject("UsersPasswordTokensRepository")
    private usersPasswordTokensRepository: IUsersPasswordTokensRepository
  ) {}

  async execute(email: string): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new ForgotPasswordError.UserNotFound();
    }

    const passwordToken = uuidv4();
    const expiration = this.dateProvider.addDays(1);

    this.usersPasswordTokensRepository.create(
      passwordToken,
      user.id,
      expiration
    );

    await this.handleEmail(email, passwordToken);
  }

  async handleEmail(email: string, passwordToken: string): Promise<void> {
    const templatePath = resolve(
      __dirname,
      "..",
      "..",
      "..",
      "views",
      "emails",
      "forgotPassword.hbs"
    );

    const mailVariables = {
      link: `http://localhost:3333/${passwordToken}`,
    };

    const subject = "Request to change password.";

    await this.mailProvider.sendMail(
      email,
      subject,
      mailVariables,
      templatePath
    );
  }
}

export { ForgotPasswordUseCase };
