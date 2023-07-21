import UserController from "../controllers/user.controller";
import { Router } from "express";
const userRoute = Router();
import multer = require("multer");
const upload = multer();
import passport from "../middlewares/passport-config";

userRoute.post("/user/create", upload.none(), UserController.createUser);
userRoute.post("/user", upload.none(), UserController.getUser);

export default userRoute;
