import mongoose, { Schema } from "mongoose";

type UserSchemaType = {
  email: string;
  password: string;
  phoneNumber?: number;
  address?: string;
  role: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number },
    address: { type: String },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
    isVerified: { type: Boolean, default: false },
    orderedFoods: { type: Schema.Types.ObjectId, ref: "FoodOrderItem" },
  },
  { timestamps: true }
);

export default mongoose.model<UserSchemaType>("User", UserSchema);
