import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;
import passport = require("passport");
import User from "../models/schemas/user.model";
import bcrypt from "bcrypt";

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ userName: username }, (err, user: any) => {
      if (err) throw err;
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  })
);

passport.serializeUser((user: any, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id: string, cb) => {
  User.findOne({ _id: id }, (err, user: any) => {
    const userInfo = {
      username: user.userName,
      id: user._id,
    };
    cb(err, userInfo);
  });
});

export default passport;
