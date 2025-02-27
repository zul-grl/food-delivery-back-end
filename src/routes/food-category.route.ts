import { Router } from "express";
import {
  createFoodCategory,
  deleteCategory,
  getoodCategories,
  updateCategory,
} from "../controllers/foodcategoty.controller";
const categoryRoute = Router();
categoryRoute
  .post("/", createFoodCategory)
  .get("/", getoodCategories)
  .delete("/", deleteCategory)
  .put("/", updateCategory);
export { categoryRoute };
