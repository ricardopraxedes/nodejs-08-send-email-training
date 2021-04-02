import { UserDto } from "../dto/UserDto";
import { User } from "../model/User";

interface IUsersRepository {
  create(userData: UserDto): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
