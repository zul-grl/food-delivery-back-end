import { Router } from "express";
import {
  createFoodOrder,
  deleteFoodOrder,
  getFoodOrders,
  updateFoodOrder,
} from "../controllers/food-order.controller";

const foodOrderRoute = Router();

foodOrderRoute
  .post("/", createFoodOrder)
  .get("/", getFoodOrders)
  .delete("/", deleteFoodOrder)
  .put("/", updateFoodOrder);

export { foodOrderRoute };
