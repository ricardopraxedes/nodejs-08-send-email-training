interface IUsersPasswordTokensRepository {
  create(
    passwordToken: string,
    user_id: string,
    expiration: Date
  ): Promise<void>;
}

export { IUsersPasswordTokensRepository };
