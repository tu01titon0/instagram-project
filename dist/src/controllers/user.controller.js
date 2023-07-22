"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/schemas/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_config_1 = __importDefault(require("../config/jwt.config"));
class UserController {
    static async createUser(req, res) {
        try {
            const userCheck = await user_model_1.default.find({ userName: req.body.userName });
            if (userCheck.length !== 0) {
                res.json({
                    message: `Đã tồn tại người dùng với tên đăng nhập ${req.body.userName} !`,
                });
            }
            else {
                const hashedPassword = await bcrypt_1.default.hash(req.body.password, 10);
                const user = new user_model_1.default({
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
        }
        catch (err) {
            console.log(err.message);
        }
    }
    static async getUser(req, res) {
        try {
            const user = await user_model_1.default.findOne({ userName: req.body.userName });
            if (!user) {
                return res.json({
                    message: `Không tồn tại người dùng ${req.body.userName} !`,
                });
            }
            else {
                const checkPassword = await bcrypt_1.default.compare(req.body.password, user.password);
                if (checkPassword) {
                    const payload = {
                        userName: req.body.userName,
                    };
                    const accessToken = jsonwebtoken_1.default.sign(payload, jwt_config_1.default.accessTokenSecret);
                    return res.json({ accessToken, user });
                }
                else {
                    return res.json({
                        message: "Mật khẩu nhập vào không chính xác !",
                    });
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
}
UserController.createToken = (_id) => {
    return jsonwebtoken_1.default.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map