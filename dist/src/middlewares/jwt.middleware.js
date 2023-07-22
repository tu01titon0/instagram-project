"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_config_1 = __importDefault(require("../config/jwt.config"));
function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader) {
        res.json({
            status: "error",
            message: "Token is required"
        });
    }
    const token = authHeader.split(" ")[1];
    jsonwebtoken_1.default.verify(token, jwt_config_1.default.accessTokenSecret, (err, decoded) => {
        if (err) {
            res.json({
                status: "error",
                message: "Token invalid",
            });
        }
        req.currenUserLogin = decoded;
        next();
    });
}
exports.default = verifyJWT;
//# sourceMappingURL=jwt.middleware.js.map