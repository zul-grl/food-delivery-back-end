import { Request, Response } from "express";
import userModel from "../../models/user.model";
import { compare, compareSync } from "bcryptjs";

export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Invalid email" });
      return;
    }
    const isCorrect = compareSync(password, user.password);
    if (!isCorrect) {
      res.status(401).json({ message: "Invalid password" });
      return;
    }
    res.status(200).json({ message: "Sign in successful", user: user });
  } catch (error) {
    res.status(500).json({ message: "Error in signIn", error });
  }
};
