import User from "../models/schemas/user.model";

export default class UserController {
  static async createUser(req: any, res: any) {
    try {
      const userCheck = await User.find({ userName: req.body.userName });
      if (userCheck.length !== 0) {
        res.json({
          message: `Đã tồn tại người dùng với tên đăng nhập ${req.body.userName} !`,
        });
      } else {
        const user = new User(req.body);
        res.json({
          status: "ok",
        });
        return await user.save();
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  static async getUser(req: any, res: any) {
    try {
      const user = await User.findOne({ userName: req.body.userName });
      if (!user) {
        return res.json({
          message: `Không tồn tại người dùng ${req.body.userName} !`,
        });
      } else {
        if (user.password === req.body.password) {
          return res.json({});
        } else {
          return res.json({
            message: "Mật khẩu nhập vào không chính xác !",
          });
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}
