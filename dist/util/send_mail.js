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
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (email, token) => __awaiter(void 0, void 0, void 0, function* () {
    const mailSecret = process.env.MAIL_SECRET;
    const mail = process.env.MAIL;
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: mail,
            pass: mailSecret,
        },
    });
    const mailOption = {
        from: "Nom nom foods",
        to: email,
        subject: "Reset your password",
        html: `
        <h1>Your password reset link</h1>
       <a href="http://localhost:3000/auth/change-password?id=${token}">click here</a>
    `,
    };
    yield transporter.sendMail(mailOption);
});
exports.sendEmail = sendEmail;
