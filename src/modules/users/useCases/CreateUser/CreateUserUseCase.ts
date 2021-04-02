import { inject, injectable } from "tsyringe";
import { hashSync } from "bcryptjs";
import { UserDto } from "../../dto/UserDto";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: UserDto): Promise<void> {
    const passwordHash = hashSync(password, 8);

    await this.usersRepository.create({ email, password: passwordHash });
  }
}

export { CreateUserUseCase };
