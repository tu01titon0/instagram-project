"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userName: String,
    fullName: String,
    password: String,
    className: String,
    avatarUrl: String,
    bio: String,
    gender: String,
    posts: [
        {
            post: { type: mongoose_1.Schema.Types.ObjectId, ref: "post" },
        }
    ],
    saved: [
        {
            post: { type: mongoose_1.Schema.Types.ObjectId, ref: "post" },
        }
    ],
    followers: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
        }
    ],
    following: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
        }
    ],
});
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map