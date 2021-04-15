import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { UserDto } from "../../dto/UserDto";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: UserDto): Promise<string> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect.", 401);
    }

    const validPassword = await compare(password, user.password);

    if (!validPassword) {
      throw new AppError("Email or password incorrect.", 401);
    }

    const token = sign({}, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticateUserUseCase };
