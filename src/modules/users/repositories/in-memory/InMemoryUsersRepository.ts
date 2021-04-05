import { UserDto } from "../../dto/UserDto";
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../infra/typeorm/model/User";

class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async create(userData: UserDto): Promise<void> {
    const user = new User();

    Object.assign(user, {
      ...userData,
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}

export { InMemoryUsersRepository };
