import { Router } from "express";
import { signUp } from "../controllers/auth/signUp.controller";
import { signIn } from "../controllers/auth/signIn.controller";
import { resetPasswordRequest } from "../controllers/auth/forgot-password.controller";
import { resetPassword } from "../controllers/auth/reset-password.controller";

const authRoute = Router();

authRoute
  .post("/sign-up", signUp)
  .post("/sign-in", signIn)
  .post("/reset-password-request", resetPasswordRequest)
  .post("/reset-password", resetPassword);

export { authRoute };
