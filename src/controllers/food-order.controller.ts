import { Request, Response } from "express";
import FoodOrderModel from "../models/food-order.model";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = await FoodOrderModel.create(req.body);
    res.status(201).json({ message: "Order created", newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodOrder", error });
  }
};

export const getFoodOrders = async (req: Request, res: Response) => {
  try {
    const orders = await FoodOrderModel.find()
      .populate("user")
      .populate("foodOrderItems");
    res.status(200).json({ message: "All orders", orders });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoodOrders", error });
  }
};

export const getFoodOrdersByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orders = await FoodOrderModel.find({ user: userId }).populate(
      "foodOrderItems"
    );
    res.status(200).json({ message: "User orders", orders });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoodOrdersByUser", error });
  }
};

export const updateFoodOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { foodOrderId } = req.params;
    const updatedOrder = await FoodOrderModel.findByIdAndUpdate(
      foodOrderId,
      req.body,
      { new: true }
    );
    if (!updatedOrder) {
      res.status(404).json({ message: "Order not found" });
      return;
    }
    res.status(200).json({ message: "Order updated", updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Error in updateFoodOrder", error });
  }
};
