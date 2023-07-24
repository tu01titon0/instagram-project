import User from "../models/schemas/user.model";
import Post from "../models/schemas/post.model";

export default class PostController {
  static async createPost(req: any, res: any) {
    const user = await User.findOne({ _id: req.body.user_id });
    if (!user) {
      res.json({
        message:
          "Người dùng không tồn tại, vui lòng đăng nhập để sử dụng dịch vụ !",
      });
    } else if (!req.body.imgUrl) {
      res.json({
        message: "Đây là dịch vụ chia sẻ ảnh, hãy vui lòng đăng tải ảnh !",
      });
    } else {
      const { description, createAt, imgUrl } = req.body;
      const post = new Post({ description, createAt, imgUrl });
      post.user = user._id;
      await post.save();
      user.posts.push({ post: post._id });
      await user.save();
      res.json({
        post: await Post.findOne({_id: post._id}).populate("user"),
      });
    }
  }

  static async getAllPosts(req: any, res: any) {
    const user = await User.findOne({ _id: req.body.user_id });
    const posts = await Post.find().populate("user");
    const data = posts.reverse();
    res.json({ posts: data });
  }

  static async getPostDetail(req: any, res: any) {
    const post = await Post.findById(req.params.id).populate("user");
    res.json({ post });
  }
}
