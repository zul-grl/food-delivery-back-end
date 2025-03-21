import { Request, Response } from "express";
import UserModel from "../models/user.model";
import userModel from "../models/user.model";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await UserModel.create(userData);
    res.status(200).json({ message: "User created", newUser });
  } catch (error) {
    res.status(500).json({ message: "Error in createUser", error });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.findById(userId);
    res.status(200).json({ message: "User", user });
  } catch (error) {
    res.status(500).json({ message: "Error in getUsers", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    await UserModel.deleteOne({ _id: _id });
    res.status(200).json({ message: "Deleted user" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteUser", error });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;
    const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Error in updateUser", error });
  }
};
