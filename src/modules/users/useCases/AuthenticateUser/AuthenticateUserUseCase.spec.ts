import { hashSync } from "bcryptjs";
import { AppError } from "../../../../shared/errors/AppError";
import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

describe("Authenticate user use case", () => {
  let usersRepository: IUsersRepository;
  let authenticateUsersUseCase: AuthenticateUserUseCase;

  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    authenticateUsersUseCase = new AuthenticateUserUseCase(usersRepository);
  });

  it("should authenticate existing user", async () => {
    const email = "user@email.com";
    const password = "1234";
    const passwordHash = hashSync(password, 8);

    await usersRepository.create({ email, password: passwordHash });

    const token = await authenticateUsersUseCase.execute({ email, password });

    expect(token).toBeTruthy();
  });

  it("should not authenticate not found user", async () => {
    const email = "user@email.com";
    const password = "1234";

    expect(async () => {
      await authenticateUsersUseCase.execute({ email, password });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not authenticate user with wrong password", async () => {
    const email = "user@email.com";
    const password = "1234";
    const passwordHash = hashSync(password, 8);
    const wrongPassword = "wrongPassword";

    await usersRepository.create({ email, password: passwordHash });

    expect(async () => {
      await authenticateUsersUseCase.execute({
        email,
        password: wrongPassword,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
