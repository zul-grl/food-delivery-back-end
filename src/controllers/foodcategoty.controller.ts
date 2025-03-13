import { Request, Response } from "express";
import FoodCategoryModel from "../models/food-category.model";

export const getFoodCategories = async (req: Request, res: Response) => {
  try {
    const categories = await FoodCategoryModel.find();
    res.status(200).json({ message: "All categories", categories });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoodCategories", error });
  }
};

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = await FoodCategoryModel.create(req.body);
    res.status(201).json({ message: "Category created", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};
export const updateFoodCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { foodCategoryId } = req.params;
    const updatedCategory = await FoodCategoryModel.findByIdAndUpdate(
      foodCategoryId,
      { categoryName: req.body.categoryName },
      { new: true }
    );
    if (!updatedCategory) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.status(200).json({ message: "Category updated", updatedCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in updateFoodCategory", error });
  }
};
export const deleteFoodCategory = async (req: Request, res: Response) => {
  try {
    const { foodCategoryId } = req.params;
    await FoodCategoryModel.findByIdAndDelete(foodCategoryId);
    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteFoodCategory", error });
  }
};
