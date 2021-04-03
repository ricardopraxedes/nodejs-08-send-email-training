import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";
import { UsersRepository } from "../../../../modules/users/infra/typeorm/repositories/UsersRepository";

interface iTokenInfo {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  const usersRepository = new UsersRepository();

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as iTokenInfo;

    const user = await usersRepository.findById(sub);

    if (!user) {
      throw new AppError("User not found.", 400);
    }

    request.user = user;
    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
