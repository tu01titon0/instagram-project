"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    description: { type: String, default: "" },
    createAt: { type: Date, default: new Date().toDateString() },
    imgUrl: String,
    comments: [
        {
            comment: String,
            created: { type: Date, default: new Date().toDateString() },
            postedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
        },
    ],
    likes: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
        },
    ],
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
    },
    saved: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
        },
    ],
});
const Post = (0, mongoose_1.model)("post", postSchema);
exports.default = Post;
//# sourceMappingURL=post.model.js.map