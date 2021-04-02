import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/files";
import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

@injectable()
class UpdatePhotoUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: UsersRepository
  ) {}

  async execute(user: User, photoUrl: string): Promise<void> {
    if (user.photoUrl) {
      await deleteFile(`./tmp/user_photos/${photoUrl}`);
    }

    const { email, password, id } = user;

    await this.usersRepository.create({ email, password, photoUrl, id });
  }
}

export { UpdatePhotoUseCase };
