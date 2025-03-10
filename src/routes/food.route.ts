import { Router } from "express";
import {
  createFood,
  deleteFood,
  getFoodById,
  updateFood,
  getAllFood,
} from "../controllers/food.controller";
const foodRoute = Router();

foodRoute
  .post("/", createFood)
  .get("/", getAllFood)
  .get("/:foodId", getFoodById)
  .patch("/:foodId", updateFood)
  .delete("/:foodId", deleteFood);

export { foodRoute };
