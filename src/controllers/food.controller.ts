import { Request, Response } from "express";
import FoodModel from "../models/food.model";

export const createFood = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const createdFood = await FoodModel.create(req.body);
    res.status(201).json({ message: "Food created successfully", createdFood });
  } catch (error) {
    res.status(500).json({ message: "Error creating food", error });
  }
};
export const getAllFood = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allFood = await FoodModel.find().populate("category");
    allFood;
    res.status(200).json({ message: "All food", allFood });
    return;
  } catch (error) {
    console.log("Error in getAllFood", error);
  }
};
export const getFoodById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { foodId } = req.params;
    const food = await FoodModel.findById(foodId).populate("category");
    if (!food) res.status(404).json({ message: "Food not found" });
    res.status(200).json({ message: "Food found", food });
    return;
  } catch (error) {
    res.status(500).json({ message: "Error in getFoodById", error });
  }
};

export const updateFood = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { foodId } = req.params;
    const updatedFood = await FoodModel.findByIdAndUpdate(foodId, req.body, {
      new: true,
    });
    if (!updatedFood) {
      res.status(404).json({ message: "Food not found" });
      return;
    }
    res.status(200).json({ message: "Food updated", updatedFood });
  } catch (error) {
    res.status(500).json({ message: "Error in updateFood", error });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    await FoodModel.findByIdAndDelete(foodId);
    res.status(200).json({ message: "Food deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteFood", error });
  }
};
