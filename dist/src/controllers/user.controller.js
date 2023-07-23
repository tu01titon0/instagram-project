"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/schemas/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
                    const accessToken = jsonwebtoken_1.default.sign(payload, process.env.SECRET);
                    const userData = {
                        _id: user._id,
                        userName: user.userName,
                        fullName: user.fullName,
                        avatarUrl: user.avatarUrl,
                        bio: user.bio,
                        gender: user.gender,
                    };
                    return res.json({ accessToken, userData });
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
    static async getUserInfo(req, res) {
        try {
            const user = await user_model_1.default.findById({ _id: req.body._id });
            if (!user) {
                res.json({ message: "Người dùng không tồn tại!" });
            }
            else {
                res.json({ user: user });
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
    static async updateUser(req, res) {
        const hashedPassword = await bcrypt_1.default.hash(req.body.password, 10);
        const user = await user_model_1.default.findOne({ _id: req.body.userId });
        if (!user) {
            res.json({ message: "User không tồn tại!" });
        }
        return await user_model_1.default.updateOne({ _id: req.body.userId }, {
            $set: Object.assign(Object.assign(Object.assign(Object.assign({}, (req.body.bio && { bio: req.body.bio })), (req.body.avatarUrl && { avatarUrl: req.body.avatarUrl })), (req.body.gender && { gender: req.body.gender })), (req.body.password && { password: hashedPassword })),
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map