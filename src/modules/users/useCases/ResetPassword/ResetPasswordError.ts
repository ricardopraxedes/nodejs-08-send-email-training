import { AppError } from "../../../../shared/errors/AppError";

export namespace ResetPasswordError {
  export class InvalidToken extends AppError {
    constructor() {
      super("Invalid token.", 400);
    }
  }
}
