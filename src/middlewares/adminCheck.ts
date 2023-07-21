// import User from "../models/schemas/user.model";

// const isAdministratorMiddleware = (req, res, next) => {
//   const { user }: any = req;
//   if (user) {
//     User.findOne({ username: user.username }, (err, doc) => {
//       if (err) throw err;
//       if (doc?.isAdmin) {
//         next();
//       } else {
//         res.send("Sorry, only admin's can perform this.");
//       }
//     });
//   } else {
//     res.send("Sorry, you arent logged in.");
//   }
// };

// export default isAdministratorMiddleware;
