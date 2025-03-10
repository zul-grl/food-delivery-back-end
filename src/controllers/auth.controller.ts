import { Request, Response } from "express";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password, phoneNumber, address } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      role: "USER",
      isVerified: false,
    });

    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: "Error in signUp", error });
  }
};
