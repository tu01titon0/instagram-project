import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    content: String,
    createAt: Date,
    from: [
        {
            user: { type: Schema.Types.ObjectId, ref: "user" },
        }
    ]
});

const Comment = model("comment", commentSchema);

export default Comment;
