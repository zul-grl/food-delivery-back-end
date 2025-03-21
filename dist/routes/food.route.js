"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRoute = void 0;
const express_1 = require("express");
const food_controller_1 = require("../controllers/food.controller");
const foodRoute = (0, express_1.Router)();
exports.foodRoute = foodRoute;
foodRoute
    .post("/", food_controller_1.createFood)
    .get("/", food_controller_1.getAllFood)
    .get("/:foodId", food_controller_1.getFoodById)
    .patch("/:foodId", food_controller_1.updateFood)
    .delete("/:foodId", food_controller_1.deleteFood);
