import mongoose, { Schema } from "mongoose";

type FoodOrderItemSchemaType = {
  food: mongoose.Types.ObjectId;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
};

const FoodOrderItemSchema: Schema = new Schema(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<FoodOrderItemSchemaType>(
  "FoodOrderItem",
  FoodOrderItemSchema
);
