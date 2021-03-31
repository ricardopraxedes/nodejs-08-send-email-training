import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";
import { UserDto } from "../dto/UserDto";
import { UsersRepository } from "../repositories/implementations/CreateUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: UsersRepository
  ) {}

  async execute({ email, password }: UserDto): Promise<void> {
    const passwordHash = await bcrypt.hash(password, 8);

    await this.usersRepository.create({ email, password: passwordHash });
  }
}

export { CreateUserUseCase };
