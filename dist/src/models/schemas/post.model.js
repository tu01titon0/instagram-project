"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    description: String,
    createAt: Date,
    imgUrl: String,
    comments: [
        {
            comment: { type: mongoose_1.Schema.Types.ObjectId, ref: "comment" },
        }
    ],
    likes: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
        }
    ],
});
const Post = (0, mongoose_1.model)("post", postSchema);
exports.default = Post;
//# sourceMappingURL=post.model.js.map