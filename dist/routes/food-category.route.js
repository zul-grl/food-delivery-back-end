"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodCategoryRoute = void 0;
const express_1 = require("express");
const foodcategoty_controller_1 = require("../controllers/foodcategoty.controller");
const foodCategoryRoute = (0, express_1.Router)();
exports.foodCategoryRoute = foodCategoryRoute;
foodCategoryRoute
    .get("/", foodcategoty_controller_1.getFoodCategories)
    .post("/", foodcategoty_controller_1.createFoodCategory)
    .patch("/:foodCategoryId", foodcategoty_controller_1.updateFoodCategory)
    .delete("/:foodCategoryId", foodcategoty_controller_1.deleteFoodCategory);
