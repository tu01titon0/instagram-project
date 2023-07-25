"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const express_1 = require("express");
const userRoute = (0, express_1.Router)();
const multer = require("multer");
const upload = multer();
userRoute.post("/user/create", upload.none(), user_controller_1.default.createUser);
userRoute.post("/user/info", upload.none(), user_controller_1.default.getUserInfo);
userRoute.post("/user/update", upload.none(), user_controller_1.default.updateUser);
userRoute.post("/user/:id", user_controller_1.default.getPostsFromUser);
userRoute.post("/user/:id/post-saved", user_controller_1.default.getPostsSaved);
userRoute.post("/user", upload.none(), user_controller_1.default.getUser);
exports.default = userRoute;
//# sourceMappingURL=user.routes.js.map