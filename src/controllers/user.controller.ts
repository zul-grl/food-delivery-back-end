import { Request, Response } from "express";
import UserModel from "../models/user.model";

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
    const allUsers = await UserModel.find();
    res.status(200).json({ message: "All users", allUsers });
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

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { _id, email, password, phoneNumber, address, role, isVerified } =
      req.body;
    const updatedUser = await UserModel.updateOne(
      { _id: _id },
      { email, password, phoneNumber, address, role, isVerified }
    );
    res.status(200).json({ message: "Updated user", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Error in updateUser", error });
  }
};
