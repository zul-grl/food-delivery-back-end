import mongoose, { Schema } from "mongoose";

type UserSchemaType = {
  email: string;
  password: string;
  phoneNumber?: string;
  address?: string;
  role: "USER" | "ADMIN";
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, default: "" },
    address: { type: String, default: "" },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
    orderedFoods: { type: Schema.Types.ObjectId, ref: "FoodOrderItem" },
  },
  { timestamps: true }
);

export default mongoose.model<UserSchemaType>("User", UserSchema);
