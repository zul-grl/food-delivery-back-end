import { Router } from "express";
import {
  createFoodCategory,
  deleteFoodCategory,
  getFoodCategories,
  updateFoodCategory,
} from "../controllers/foodcategoty.controller";

const foodCategoryRoute = Router();

foodCategoryRoute
  .get("/", getFoodCategories)
  .post("/", createFoodCategory)
  .patch("/:foodCategoryId", updateFoodCategory)
  .delete("/:foodCategoryId", deleteFoodCategory);

export { foodCategoryRoute };
