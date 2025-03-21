import { Router } from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";

const userRoute = Router();

userRoute
  .get("/:userId", getUsers)
  .delete("/:userId", deleteUser)
  .patch("/:userId", updateUser);

export { userRoute };
