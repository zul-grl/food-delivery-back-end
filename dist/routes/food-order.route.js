"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodOrderRoute = void 0;
const express_1 = require("express");
const food_order_controller_1 = require("../controllers/food-order.controller");
const foodOrderRoute = (0, express_1.Router)();
exports.foodOrderRoute = foodOrderRoute;
foodOrderRoute
    .post("/", food_order_controller_1.createFoodOrder)
    .get("/", food_order_controller_1.getFoodOrders)
    .get("/:userId", food_order_controller_1.getFoodOrdersByUser)
    .delete("/", food_order_controller_1.deleteFoodOrder)
    .patch("/:foodOrderId", food_order_controller_1.updateFoodOrder);
