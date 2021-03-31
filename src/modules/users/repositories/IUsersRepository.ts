import { UserDto } from "../dto/UserDto";

interface IUserRepository {
  create(userData: UserDto): Promise<void>;
}

export { IUserRepository };
