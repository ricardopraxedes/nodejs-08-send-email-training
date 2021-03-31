import { getRepository, Repository } from "typeorm";
import { UserDto } from "../../dto/UserDto";
import { User } from "../../model/User";
import { IUserRepository } from "../IUsersRepository";

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ email, password }: UserDto): Promise<void> {
    const user = this.repository.create({
      email,
      password,
    });

    this.repository.save(user);
  }
}

export { UsersRepository };
