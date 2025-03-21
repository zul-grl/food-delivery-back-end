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
exports.signIn = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const bcryptjs_1 = require("bcryptjs");
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_model_1.default.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "Invalid email" });
            return;
        }
        const isCorrect = (0, bcryptjs_1.compareSync)(password, user.password);
        if (!isCorrect) {
            res.status(401).json({ message: "Invalid password" });
            return;
        }
        res.status(200).json({ message: "Sign in successful", user: user });
    }
    catch (error) {
        res.status(500).json({ message: "Error in signIn", error });
    }
});
exports.signIn = signIn;
