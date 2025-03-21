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
exports.signUp = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const bcryptjs_1 = require("bcryptjs");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email) {
            res.status(400).json({ message: "Email required" });
            return;
        }
        const hashedPassword = (0, bcryptjs_1.hashSync)(password, 10);
        const newUser = yield user_model_1.default.create({
            email,
            password: hashedPassword,
            role: "USER",
        });
        res
            .status(201)
            .json({ message: "User created successfully", user: newUser });
    }
    catch (error) {
        res.status(500).json({ message: "Error in signUp", error });
    }
});
exports.signUp = signUp;
