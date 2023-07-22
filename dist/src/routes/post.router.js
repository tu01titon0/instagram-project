"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
const express_1 = require("express");
const postRoute = (0, express_1.Router)();
const multer = require("multer");
const upload = multer();
postRoute.post("/create", upload.none(), post_controller_1.default.createPost);
exports.default = postRoute;
//# sourceMappingURL=post.router.js.map