import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";

const userRoute = Router();

userRoute
  .post("/", createUser)
  .get("/", getUsers)
  .delete("/", deleteUser)
  .put("/", updateUser);

export { userRoute };
