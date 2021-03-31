import { inject, injectable } from "tsyringe";
import { UserDto } from "../dto/UserDto";
import { UsersRepository } from "../repositories/implementations/CreateUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: UsersRepository
  ) {}

  async execute({ email, password }: UserDto): Promise<void> {
    await this.usersRepository.create({ email, password });
  }
}

export { CreateUserUseCase };
