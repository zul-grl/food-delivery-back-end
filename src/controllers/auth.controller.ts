import { Request, Response } from "express";
import UserModel from "../models/user.model";
import { hashSync } from "bcryptjs";
import userModel from "../models/user.model";

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.status(400).json({ message: "Email required" });
      return;
    }
    const hashedPassword = hashSync(password, 10);
    const newUser = await userModel.create({
      email,
      password: password,
    });

    res
      .status(201)
      .json({ message: "User created successfully", userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: "Error in signUp", error });
  }
};

export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Invalid email or password" });
      return;
    }
    if (password !== user.password) {
      res.status(400).json({ message: "Invalid email or password" });
      return;
    }

    res.status(200).json({ message: "Sign in successful", userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Error in signIn", error });
  }
};
export const resetPasswordRequest = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    res.status(200).json({ message: "Reset request received" });
  } catch (error) {
    res.status(500).json({ message: "Error in reset password request", error });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { userId, newPassword } = req.body;

    await userModel.findByIdAndUpdate(userId, { password: newPassword });

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error resetting password", error });
  }
};
