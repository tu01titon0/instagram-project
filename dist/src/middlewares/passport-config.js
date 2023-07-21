"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_local_1 = __importDefault(require("passport-local"));
const LocalStrategy = passport_local_1.default.Strategy;
const passport = require("passport");
const user_model_1 = __importDefault(require("../models/schemas/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
passport.use(new LocalStrategy((username, password, done) => {
    user_model_1.default.findOne({ userName: username }, (err, user) => {
        if (err)
            throw err;
        if (!user)
            return done(null, false);
        bcrypt_1.default.compare(password, user.password, (err, result) => {
            if (err)
                throw err;
            if (result) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    });
}));
passport.serializeUser((user, cb) => {
    cb(null, user._id);
});
passport.deserializeUser((id, cb) => {
    user_model_1.default.findOne({ _id: id }, (err, user) => {
        const userInfo = {
            username: user.userName,
            id: user._id,
        };
        cb(err, userInfo);
    });
});
exports.default = passport;
//# sourceMappingURL=passport-config.js.map