import { Request, Response } from "express";
import userModel from "../../models/user.model";
import { hashSync } from "bcryptjs";
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
      password: hashedPassword,
      role: "USER",
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error in signUp", error });
  }
};
