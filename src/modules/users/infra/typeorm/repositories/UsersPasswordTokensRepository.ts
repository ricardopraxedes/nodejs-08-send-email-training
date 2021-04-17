import { getRepository, Repository } from "typeorm";
import { IUsersPasswordTokensRepository } from "../../../repositories/IUsersPasswordTokensRepository";
import { UserPasswordToken } from "../model/UserPasswordToken";

class UsersPasswordTokensRepository implements IUsersPasswordTokensRepository {
  private repository: Repository<UserPasswordToken>;

  constructor() {
    this.repository = getRepository(UserPasswordToken);
  }

  async create(
    passwordToken: string,
    user_id: string,
    expiration: Date
  ): Promise<void> {
    const userPasswordToken = this.repository.create({
      passwordToken,
      user_id,
      expiration,
    });

    await this.repository.save(userPasswordToken);
  }

  async findByPasswordToken(passwordToken: string): Promise<UserPasswordToken> {
    return this.repository.findOne({ passwordToken });
  }
}

export { UsersPasswordTokensRepository };
