"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/schemas/user.model"));
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
                const user = new user_model_1.default(req.body);
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
                if (user.password === req.body.password) {
                    return res.json({});
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
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map