"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class ConnectDB {
    async connect() {
        return await mongoose_1.default.connect('mongodb+srv://nguyenmanhtu09042000:tomtiton01@cluster0.qhm1edm.mongodb.net/instagram');
    }
}
exports.ConnectDB = ConnectDB;
//# sourceMappingURL=ConnectDB.js.map