import mongoose from "mongoose";

export const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("amjilttai holbogdloo");
  } catch {
    console.log("aldaa garlaa");
  }
};
