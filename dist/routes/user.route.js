"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRoute = (0, express_1.Router)();
exports.userRoute = userRoute;
userRoute
    .get("/:userId", user_controller_1.getUsers)
    .delete("/:userId", user_controller_1.deleteUser)
    .patch("/:userId", user_controller_1.updateUser);
