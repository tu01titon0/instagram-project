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
      await post.save();
      user.posts.push({ post: post._id });
      await user.save();
    }
  }
}
