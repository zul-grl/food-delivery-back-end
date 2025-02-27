import { Request, Response } from "express";
import foodCategoryModel from "../models/food-category.model";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const newCategoty = await foodCategoryModel.create(categoryData);
    res.status(200).json({ message: "Category created", newCategoty });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};
export const getoodCategories = async (req: Request, res: Response) => {
  try {
    const allCategoty = await foodCategoryModel.find();
    res.status(200).json({ message: "All category", allCategoty });
  } catch (error) {
    res.status(500).json({ message: "Error in allCategoty", error });
  }
};
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    await foodCategoryModel.deleteOne({ _id: _id });
    res.status(200).json({ message: "Deleted category" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteCategory", error });
  }
};
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { _id, categoryName } = req.body;
    console.log("REQUEST BODY DATA", _id, categoryName);
    const updatedCategory = await foodCategoryModel.updateOne(
      { _id: _id },
      { categoryName: categoryName }
    );
    res.status(200).json({ message: "Updated category", updatedCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in updateCategory", error });
  }
};
