import { Router } from "express";
import {
  deleteFood,
  getFoodById,
  updateFood,
} from "../controllers/food.controller";

const foodRoute = Router();

foodRoute
  .get("/:foodId", getFoodById)
  .patch("/:foodId", updateFood)
  .delete("/:foodId", deleteFood);

export { foodRoute };
