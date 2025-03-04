import { Request, Response } from "express";
import FoodModel from "../models/food.model";

export const createFood = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;
    const newFood = await FoodModel.create(foodData);
    res.status(200).json({ message: "Food created", newFood });
  } catch (error) {
    res.status(500).json({ message: "Error in createFood", error });
  }
};

export const getFoods = async (req: Request, res: Response) => {
  try {
    const allFoods = await FoodModel.find().populate("category");
    res.status(200).json({ message: "All foods", allFoods });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoods", error });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    await FoodModel.deleteOne({ _id: _id });
    res.status(200).json({ message: "Deleted food" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteFood", error });
  }
};

export const updateFood = async (req: Request, res: Response) => {
  try {
    const { _id, foodName, category, price, image, ingredients } = req.body;
    const updatedFood = await FoodModel.updateOne(
      { _id: _id },
      { foodName, category, price, image, ingredients }
    );
    res.status(200).json({ message: "Updated food", updatedFood });
  } catch (error) {
    res.status(500).json({ message: "Error in updateFood", error });
  }
};
