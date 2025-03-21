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
exports.deleteFoodOrder = exports.updateFoodOrder = exports.getFoodOrdersByUser = exports.getFoodOrders = exports.createFoodOrder = void 0;
const food_order_model_1 = __importDefault(require("../models/food-order.model"));
const createFoodOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrder = yield food_order_model_1.default.create(req.body);
        res.status(201).json({ message: "Order created", newOrder });
    }
    catch (error) {
        res.status(500).json({ message: "Error in createFoodOrder", error });
    }
});
exports.createFoodOrder = createFoodOrder;
const getFoodOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield food_order_model_1.default.find()
            .populate("user")
            .populate("foodOrderItems.food");
        res.status(200).json({ message: "All orders", orders });
    }
    catch (error) {
        res.status(500).json({ message: "Error in getFoodOrders", error });
    }
});
exports.getFoodOrders = getFoodOrders;
const getFoodOrdersByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const orders = yield food_order_model_1.default.find({ user: userId })
            .populate("user")
            .populate("foodOrderItems.food");
        res.status(200).json({ message: "User orders", orders });
    }
    catch (error) {
        res.status(500).json({ message: "Error in getFoodOrdersByUser", error });
    }
});
exports.getFoodOrdersByUser = getFoodOrdersByUser;
const updateFoodOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodOrderId } = req.params;
        const updatedOrder = yield food_order_model_1.default.findByIdAndUpdate(foodOrderId, req.body, { new: true });
        if (!updatedOrder) {
            res.status(404).json({ message: "Order not found" });
            return;
        }
        res.status(200).json({ message: "Order updated", updatedOrder });
    }
    catch (error) {
        res.status(500).json({ message: "Error in updateFoodOrder", error });
    }
});
exports.updateFoodOrder = updateFoodOrder;
const deleteFoodOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedOrder = yield food_order_model_1.default.deleteMany();
        if (!updatedOrder) {
            res.status(404).json({ message: "Order not found" });
            return;
        }
        res.status(200).json({ message: "Order updated", updatedOrder });
    }
    catch (error) {
        res.status(500).json({ message: "Error in updateFoodOrder", error });
    }
});
exports.deleteFoodOrder = deleteFoodOrder;
