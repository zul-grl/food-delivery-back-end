import { Request, Response } from "express";
import FoodOrderModel from "../models/food-order.model";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const newOrder = await FoodOrderModel.create(orderData);
    res.status(200).json({ message: "Order created", newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodOrder", error });
  }
};

export const getFoodOrders = async (req: Request, res: Response) => {
  try {
    const allOrders = await FoodOrderModel.find()
      .populate("user")
      .populate("foodOrderItems");
    res.status(200).json({ message: "All orders", allOrders });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoodOrders", error });
  }
};

export const deleteFoodOrder = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    await FoodOrderModel.deleteOne({ _id: _id });
    res.status(200).json({ message: "Deleted order" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteFoodOrder", error });
  }
};

export const updateFoodOrder = async (req: Request, res: Response) => {
  try {
    const { _id, user, totalPrice, status, foodOrderItems } = req.body;
    const updatedOrder = await FoodOrderModel.updateOne(
      { _id: _id },
      { user, totalPrice, status, foodOrderItems }
    );
    res.status(200).json({ message: "Updated order", updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Error in updateFoodOrder", error });
  }
};
