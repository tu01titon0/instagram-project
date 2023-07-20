import express = require("express");
import bodyParser from "body-parser";
import "dotenv/config";
import { ConnectDB } from "./src/models/ConnectDB";
import passport from "passport";
const app = express();
const port = process.env.PORT || 3000;
import session from "express-session";
const db = new ConnectDB();
import cors from "cors";

import userRoute from "./src/routes/user.routes";

db.connect()
  .then((r) => {
    console.log(`connect database successfully`);
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(cors());
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/api", userRoute);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(async (req: any, res: any, next: any) => {
  if (req.isAuthenticated()) {
    try {
      res.locals.userLogin = req.user;
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  }
  next();
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
