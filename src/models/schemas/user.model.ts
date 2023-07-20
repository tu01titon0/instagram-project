import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: String,
  fullName: String,
  password: String,
  avatarUrl: String,
  bio: String,
  gender: String,
  posts: [
    {
      post: { type: Schema.Types.ObjectId, ref: "post" },
    },
  ],
  saved: [
    {
      post: { type: Schema.Types.ObjectId, ref: "post" },
    },
  ],
  followers: [
    {
      user: { type: Schema.Types.ObjectId, ref: "user" },
    },
  ],
  following: [
    {
      user: { type: Schema.Types.ObjectId, ref: "user" },
    },
  ],
});
const User = model("user", userSchema);

export default User;
