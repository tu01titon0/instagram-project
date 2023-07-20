"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    content: String,
    createAt: Date,
    from: [
        {
            user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
        }
    ]
});
const Comment = (0, mongoose_1.model)("comment", commentSchema);
exports.default = Comment;
//# sourceMappingURL=comment.model.js.map