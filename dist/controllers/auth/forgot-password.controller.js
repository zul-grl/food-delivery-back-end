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
exports.resetPasswordRequest = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const send_mail_1 = require("../../util/send_mail");
const jwtSecret = process.env.JWT_SECRET;
const resetPasswordRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email) {
            res.status(401).json({ messsage: "Emailee oruulna uu" });
            return;
        }
        const user = yield user_model_1.default.findOne({ email });
        console.log("user", user);
        if (!user) {
            res.status(401).json({ messsage: "Burtgeltei hereglegch alga" });
            return;
        }
        console.log("jwt-secret", jwtSecret);
        const token = jsonwebtoken_1.default.sign({ id: user._id }, jwtSecret, { expiresIn: "1h" });
        yield (0, send_mail_1.sendEmail)(email, token);
        res.status(200).json({ message: "amjilttai" });
    }
    catch (error) {
        res.status(500).json({ message: "Aldaa garlaa", error });
    }
});
exports.resetPasswordRequest = resetPasswordRequest;
