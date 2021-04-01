import { UserDto } from "../dto/UserDto";

interface IUsersRepository {
  create(userData: UserDto): Promise<void>;
}

export { IUsersRepository };
