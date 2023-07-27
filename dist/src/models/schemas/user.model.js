"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userName: String,
    fullName: String,
    password: String,
    avatarUrl: {
        type: String,
        default: "https://firebasestorage.googleapis.com/v0/b/module5instagram-b1f91.appspot.com/o/BaseFiles%2Fdefaultuser.jpg?alt=media&token=b4932bc6-f626-4605-a2f5-99f0e79bcfda",
    },
    bio: { type: String, default: "" },
    gender: { type: String, default: "other" },
    posts: [
        {
            post: { type: mongoose_1.Schema.Types.ObjectId, ref: "post" },
        },
    ],
    saved: [
        {
            post: { type: mongoose_1.Schema.Types.ObjectId, ref: "post" },
        },
    ],
    followers: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
        },
    ],
    following: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
        },
    ],
});
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map