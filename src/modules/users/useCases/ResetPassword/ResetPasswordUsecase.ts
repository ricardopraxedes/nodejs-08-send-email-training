import { hashSync } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { IUsersPasswordTokensRepository } from "../../repositories/IUsersPasswordTokensRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ResetPasswordError } from "./ResetPasswordError";

@injectable()
class ResetPasswordUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository,
    @inject("UsersPasswordTokensRepository")
    private usersPasswordTokensRepository: IUsersPasswordTokensRepository
  ) {}

  async execute(passwordtoken: string, password: string): Promise<void> {
    const userPasswordToken = await this.usersPasswordTokensRepository.findByPasswordToken(
      passwordtoken
    );

    if (!userPasswordToken) {
      throw new ResetPasswordError.InvalidToken();
    }

    const user = await this.usersRepository.findById(userPasswordToken.user_id);

    const passwordHash = hashSync(password, 8);

    user.password = passwordHash;

    await this.usersRepository.create(user);
  }
}

export { ResetPasswordUseCase };
