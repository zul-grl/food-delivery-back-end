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
exports.deleteFood = exports.updateFood = exports.getFoodById = exports.getAllFood = exports.createFood = void 0;
const food_model_1 = __importDefault(require("../models/food.model"));
const createFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdFood = yield food_model_1.default.create(req.body);
        res.status(201).json({ message: "Food created successfully", createdFood });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating food", error });
    }
});
exports.createFood = createFood;
const getAllFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allFood = yield food_model_1.default.find().populate("category");
        allFood;
        res.status(200).json({ message: "All food", allFood });
        return;
    }
    catch (error) {
        console.log("Error in getAllFood", error);
    }
});
exports.getAllFood = getAllFood;
const getFoodById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodId } = req.params;
        const food = yield food_model_1.default.findById(foodId).populate("category");
        if (!food)
            res.status(404).json({ message: "Food not found" });
        res.status(200).json({ message: "Food found", food });
        return;
    }
    catch (error) {
        res.status(500).json({ message: "Error in getFoodById", error });
    }
});
exports.getFoodById = getFoodById;
const updateFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodId } = req.params;
        const updatedFood = yield food_model_1.default.findByIdAndUpdate(foodId, req.body, {
            new: true,
        });
        if (!updatedFood) {
            res.status(404).json({ message: "Food not found" });
            return;
        }
        res.status(200).json({ message: "Food updated", updatedFood });
    }
    catch (error) {
        res.status(500).json({ message: "Error in updateFood", error });
    }
});
exports.updateFood = updateFood;
const deleteFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodId } = req.params;
        yield food_model_1.default.findByIdAndDelete(foodId);
        res.status(200).json({ message: "Food deleted" });
    }
    catch (error) {
        res.status(500).json({ message: "Error in deleteFood", error });
    }
});
exports.deleteFood = deleteFood;
