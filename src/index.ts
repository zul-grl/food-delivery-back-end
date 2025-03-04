import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongodb } from "./database/db";
import { categoryRoute } from "./routes/food-category.route";
import { foodRoute } from "./routes/food.route";
import { userRoute } from "./routes/user.route";
import { foodOrderRoute } from "./routes/food-order.route";

const app = express();
const port = 4000;

app.use(bodyParser.json());
configDotenv();
connectMongodb();

app.use("/food-category", categoryRoute);
app.use("/food", foodRoute);
app.use("/user", userRoute);
app.use("/food-order", foodOrderRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
