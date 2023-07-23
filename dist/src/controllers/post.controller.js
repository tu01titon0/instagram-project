"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/schemas/user.model"));
const post_model_1 = __importDefault(require("../models/schemas/post.model"));
class PostController {
    static async createPost(req, res) {
        const user = await user_model_1.default.findOne({ _id: req.body.user_id });
        if (!user) {
            res.json({
                message: "Người dùng không tồn tại, vui lòng đăng nhập để sử dụng dịch vụ !",
            });
        }
        else if (!req.body.imgUrl) {
            res.json({
                message: "Đây là dịch vụ chia sẻ ảnh, hãy vui lòng đăng tải ảnh !",
            });
        }
        else {
            const { description, createAt, imgUrl } = req.body;
            const post = new post_model_1.default({ description, createAt, imgUrl });
            post.user = user._id;
            await post.save();
            user.posts.push({ post: post._id });
            await user.save();
        }
    }
    static async getAllPosts(req, res) {
        const user = await user_model_1.default.findOne({ _id: req.body.user_id });
        const posts = await post_model_1.default.find().populate('user');
        res.json({ posts: posts });
    }
}
exports.default = PostController;
//# sourceMappingURL=post.controller.js.map