"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFoodCategory = exports.updateFoodCategory = exports.createFoodCategory = exports.getFoodCategories = void 0;
const food_category_model_1 = __importDefault(require("../models/food-category.model"));
const getFoodCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield food_category_model_1.default.find();
        res.status(200).json({ message: "All categories", categories });
    }
    catch (error) {
        res.status(500).json({ message: "Error in getFoodCategories", error });
    }
});
exports.getFoodCategories = getFoodCategories;
const createFoodCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCategory = yield food_category_model_1.default.create(req.body);
        res.status(201).json({ message: "Category created", newCategory });
    }
    catch (error) {
        res.status(500).json({ message: "Error in createFoodCategory", error });
    }
});
exports.createFoodCategory = createFoodCategory;
const updateFoodCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodCategoryId } = req.params;
        const updatedCategory = yield food_category_model_1.default.findByIdAndUpdate(foodCategoryId, { categoryName: req.body.categoryName }, { new: true });
        if (!updatedCategory) {
            res.status(404).json({ message: "Category not found" });
            return;
        }
        res.status(200).json({ message: "Category updated", updatedCategory });
    }
    catch (error) {
        res.status(500).json({ message: "Error in updateFoodCategory", error });
    }
});
exports.updateFoodCategory = updateFoodCategory;
const deleteFoodCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodCategoryId } = req.params;
        yield food_category_model_1.default.findByIdAndDelete(foodCategoryId);
        res.status(200).json({ message: "Category deleted" });
    }
    catch (error) {
        res.status(500).json({ message: "Error in deleteFoodCategory", error });
    }
});
exports.deleteFoodCategory = deleteFoodCategory;
