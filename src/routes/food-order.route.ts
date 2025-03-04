import { Router } from "express";
import {
  createFoodOrder,
  getFoodOrders,
  getFoodOrdersByUser,
  updateFoodOrder,
} from "../controllers/food-order.controller";

const foodOrderRoute = Router();

foodOrderRoute
  .post("/", createFoodOrder)
  .get("/", getFoodOrders)
  .get("/:userId", getFoodOrdersByUser)
  .patch("/:foodOrderId", updateFoodOrder);

export { foodOrderRoute };
