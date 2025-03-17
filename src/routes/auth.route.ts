import { Router } from "express";
import {
  resetPassword,
  resetPasswordRequest,
} from "../controllers/auth.controller";
import { signUp } from "../controllers/auth/signUp.controller";
import { signIn } from "../controllers/auth/signIn.controller";

const authRoute = Router();

authRoute
  .post("/sign-up", signUp)
  .post("/sign-in", signIn)
  //   .get("/refresh", refreshToken)
  .post("/reset-password-request", resetPasswordRequest)
  //   .get("/verify-reset-password-request", verifyResetPasswordRequest)
  .post("/reset-password", resetPassword);

export { authRoute };
