import { AppError } from "../../../../errors/AppError";

export namespace ForgotPasswordError {
  export class UserNotFound extends AppError {
    constructor() {
      super("User not found.", 404);
    }
  }
}
