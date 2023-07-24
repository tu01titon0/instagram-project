import { Schema, model } from "mongoose";

const postSchema = new Schema({
  description: { type: String, default: "" },
  createAt: { type: Date, default: Date() },
  imgUrl: String,
  comments: [
    {
      comment: { type: Schema.Types.ObjectId, ref: "comment" },
    },
  ],
  likes: [
    {
      user: { type: Schema.Types.ObjectId, ref: "user" },
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Post = model("post", postSchema);

export default Post;
