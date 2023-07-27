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
postRoute.post("/like-post", post_controller_1.default.likeOrUnlike);
postRoute.post("/save-post", post_controller_1.default.savePost);
postRoute.get("/", post_controller_1.default.getAllPosts);
postRoute.get('/page/:id', post_controller_1.default.pagination);
postRoute.post("/p/:id", post_controller_1.default.getPostDetail);
postRoute.post("/comment/:id", post_controller_1.default.postComment);
exports.default = postRoute;
//# sourceMappingURL=post.router.js.map