import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  content: String,
  createAt: { type: Date, default: new Date().toDateString() },
  from: [
    {
      user: { type: Schema.Types.ObjectId, ref: "user" },
    },
  ],
});

const Comment = model("comment", commentSchema);

export default Comment;
