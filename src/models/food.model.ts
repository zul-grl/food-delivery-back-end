import mongoose, { Schema } from "mongoose";

type FoodSchemaType = {
  foodName: string;
  category: mongoose.Types.ObjectId;
  price: string;
  image: string;
  ingredients: string;
  createdAt: Date;
  updatedAt: Date;
};

const FoodSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
    price: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<FoodSchemaType>("Food", FoodSchema);
