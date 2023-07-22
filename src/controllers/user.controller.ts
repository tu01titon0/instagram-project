import User from "../models/schemas/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import JWTConfig from "../config/jwt.config";

export default class UserController {
  static createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
  };

  static async createUser(req: any, res: any) {
    try {
      const userCheck = await User.find({ userName: req.body.userName });
      if (userCheck.length !== 0) {
        res.json({
          message: `Đã tồn tại người dùng với tên đăng nhập ${req.body.userName} !`,
        });
      } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
          userName: req.body.userName,
          fullName: req.body.fullName,
          gender: req.body.gender,
          password: hashedPassword,
        });
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
        const checkPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (checkPassword) {
          const payload = {
            userName: req.body.userName,
          };
          const accessToken = jwt.sign(payload, JWTConfig.accessTokenSecret);
          return res.json({ accessToken, user });
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
