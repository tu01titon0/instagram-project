"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/schemas/user.model"));
class UserController {
    static async createUser(req, res) {
        const user = new user_model_1.default(req.body);
        console.log(user);
        return await user.save();
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map