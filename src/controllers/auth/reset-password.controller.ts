import { Request, Response } from "express";
import userModel from "../../models/user.model";

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
