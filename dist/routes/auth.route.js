"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = require("express");
const signUp_controller_1 = require("../controllers/auth/signUp.controller");
const signIn_controller_1 = require("../controllers/auth/signIn.controller");
const forgot_password_controller_1 = require("../controllers/auth/forgot-password.controller");
const reset_password_controller_1 = require("../controllers/auth/reset-password.controller");
const authRoute = (0, express_1.Router)();
exports.authRoute = authRoute;
authRoute
    .post("/sign-up", signUp_controller_1.signUp)
    .post("/sign-in", signIn_controller_1.signIn)
    .post("/reset-password-request", forgot_password_controller_1.resetPasswordRequest)
    .post("/reset-password", reset_password_controller_1.resetPassword);
