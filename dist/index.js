"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
const ConnectDB_1 = require("./src/models/ConnectDB");
const passport_1 = __importDefault(require("passport"));
const app = express();
const port = process.env.PORT || 3000;
const express_session_1 = __importDefault(require("express-session"));
const db = new ConnectDB_1.ConnectDB();
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./src/routes/user.routes"));
db.connect()
    .then((r) => {
    console.log(`connect database successfully`);
})
    .catch((err) => {
    console.log(err.message);
});
app.use((0, cors_1.default)());
app.use(express.static("./public"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express.json());
app.use("/api", user_routes_1.default);
app.use((0, express_session_1.default)({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(async (req, res, next) => {
    if (req.isAuthenticated()) {
        try {
            res.locals.userLogin = req.user;
        }
        catch (error) {
            console.error("Error fetching cart:", error);
        }
    }
    next();
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map