import { inject, injectable } from "tsyringe";
import { UserDto } from "../dto/UserDto";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: UserDto): Promise<void> {
    // const passwordHash = await bcrypt.hash(password, 8);

    await this.usersRepository.create({ email, password });
  }
}

export { CreateUserUseCase };
