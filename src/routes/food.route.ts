import { Router } from "express";
import {
  createFood,
  deleteFood,
  getFoods,
  updateFood,
} from "../controllers/food.controller";

const foodRoute = Router();

foodRoute
  .post("/", createFood)
  .get("/", getFoods)
  .delete("/", deleteFood)
  .put("/", updateFood);

export { foodRoute };
