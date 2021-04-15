import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../errors/AppError";

function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const { user } = request;

  if (!user.isAdmin) {
    throw new AppError("Operation not authorized.");
  }

  next();
}

export { ensureAdmin };
