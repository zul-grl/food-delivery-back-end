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
exports.updateUser = exports.deleteUser = exports.getUsers = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const user_model_2 = __importDefault(require("../models/user.model"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const newUser = yield user_model_1.default.create(userData);
        res.status(200).json({ message: "User created", newUser });
    }
    catch (error) {
        res.status(500).json({ message: "Error in createUser", error });
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const user = yield user_model_1.default.findById(userId);
        res.status(200).json({ message: "User", user });
    }
    catch (error) {
        res.status(500).json({ message: "Error in getUsers", error });
    }
});
exports.getUsers = getUsers;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.body;
        yield user_model_1.default.deleteOne({ _id: _id });
        res.status(200).json({ message: "Deleted user" });
    }
    catch (error) {
        res.status(500).json({ message: "Error in deleteUser", error });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const updatedUser = yield user_model_2.default.findByIdAndUpdate(userId, req.body, {
            new: true,
        });
        if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json({ message: "User updated", updatedUser });
    }
    catch (error) {
        res.status(500).json({ message: "Error in updateUser", error });
    }
});
exports.updateUser = updateUser;
