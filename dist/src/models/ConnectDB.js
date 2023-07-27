"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
class ConnectDB {
    async connect() {
        return await mongoose_1.default.connect(process.env.DB_URL);
    }
}
exports.ConnectDB = ConnectDB;
//# sourceMappingURL=ConnectDB.js.map