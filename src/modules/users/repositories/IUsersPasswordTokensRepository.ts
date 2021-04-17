import { UserPasswordToken } from "../infra/typeorm/model/UserPasswordToken";

interface IUsersPasswordTokensRepository {
  create(
    passwordToken: string,
    user_id: string,
    expiration: Date
  ): Promise<void>;
  findByPasswordToken(passwordToken: string): Promise<UserPasswordToken>;
}

export { IUsersPasswordTokensRepository };
