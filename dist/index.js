"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = require("dotenv");
const db_1 = require("./database/db");
const auth_route_1 = require("./routes/auth.route");
const food_route_1 = require("./routes/food.route");
const food_category_route_1 = require("./routes/food-category.route");
const food_order_route_1 = require("./routes/food-order.route");
const user_route_1 = require("./routes/user.route");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
(0, dotenv_1.configDotenv)();
(0, db_1.connectMongodb)();
app.use("/auth", auth_route_1.authRoute);
app.use("/food", food_route_1.foodRoute);
app.use("/food-category", food_category_route_1.foodCategoryRoute);
app.use("/food-order", food_order_route_1.foodOrderRoute);
app.use("/user", user_route_1.userRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
