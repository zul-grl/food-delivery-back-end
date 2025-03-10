import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();
export const connectMongodb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zulgerel:zula@cluster0.kaful.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (e) {
    console.log(process.env.MONGODB_URL || e);
  }
};
