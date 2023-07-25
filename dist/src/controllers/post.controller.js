"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/schemas/user.model"));
const post_model_1 = __importDefault(require("../models/schemas/post.model"));
class PostController {
    static async createPost(req, res) {
        try {
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
                res.json({
                    post: await post_model_1.default.findOne({ _id: post._id }).populate("user"),
                });
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }
    static async getAllPosts(req, res) {
        const posts = await post_model_1.default.find().populate("user");
        const data = posts.reverse();
        res.json({ posts: data });
    }
    static async getPostDetail(req, res) {
        const post = await post_model_1.default.findById(req.params.id)
            .populate("user")
            .populate("comments.postedBy");
        res.json({ post });
    }
    static async postComment(req, res) {
        try {
            const { user, comment } = req.body;
            const post = await post_model_1.default.findOne({ _id: req.params.id });
            const userPosted = await user_model_1.default.findOne({ _id: user._id });
            if (comment.length < 1) {
                res.json({ message: "Vui lòng nhập nội dung!" });
            }
            else if (post && userPosted) {
                await post_model_1.default.findByIdAndUpdate(req.params.id, {
                    $push: {
                        comments: {
                            comment: comment,
                            postedBy: user._id,
                        },
                    },
                }, { new: true });
                const fePost = await post_model_1.default.findById(req.params.id).populate("comments.postedBy");
                return res.json({ data: fePost.comments });
            }
            else {
                res.json({ message: "Người dùng hoặc bài viết không tồn tại!" });
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
    static async likeOrUnlike(req, res) {
        try {
            const user = await user_model_1.default.findOne({ _id: req.body.user_id });
            const post = await post_model_1.default.findOne({ _id: req.body.postId }).populate("likes");
            let message;
            if (user && post) {
                const hasLiked = post.likes.some((like) => like.user._id.toString() === user._id.toString());
                if (hasLiked) {
                    post.likes = post.likes.filter((like) => like.user._id.toString() !== user._id.toString());
                    message = 'unlike';
                }
                else {
                    post.likes.push({ user: user._id });
                    message = "like";
                }
                await post.save();
                const newPost = await post_model_1.default.findOne({ _id: post._id }).populate("user");
                res.json({
                    message: message,
                    post: newPost,
                });
            }
            else {
                res.json({
                    message: "Người dùng không tồn tại, vui lòng đăng nhập để sử dụng dịch vụ !",
                });
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
    static async savePost(req, res) {
        try {
            const user = await user_model_1.default.findOne({ _id: req.body.user_id });
            const post = await post_model_1.default.findOne({ _id: req.body.postId }).populate("likes");
            let message;
            if (user && post) {
                const hasSaved = post.saved.some((save) => save.user._id.toString() === user._id.toString());
                if (hasSaved) {
                    post.saved = post.saved.filter((save) => save.user._id.toString() !== user._id.toString());
                    message = 'unsave';
                }
                else {
                    post.saved.push({ user: user._id });
                    message = "save";
                }
                await post.save();
                const newPost = await post_model_1.default.findOne({ _id: post._id }).populate("user");
                res.json({
                    message: message,
                    post: newPost,
                });
            }
            else {
                res.json({
                    message: "Người dùng không tồn tại, vui lòng đăng nhập để sử dụng dịch vụ !",
                });
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
}
exports.default = PostController;
//# sourceMappingURL=post.controller.js.map