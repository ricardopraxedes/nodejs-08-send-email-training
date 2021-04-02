import { getRepository, Repository } from "typeorm";
import { UserDto } from "../../dto/UserDto";
import { User } from "../../model/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ email, password, photoUrl, id }: UserDto): Promise<void> {
    const user = this.repository.create({
      id,
      email,
      password,
      photoUrl,
    });

    this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    return this.repository.findOne(id);
  }
}

export { UsersRepository };
