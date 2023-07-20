import User from "../models/schemas/user.model";

export default class UserController {
  static async createUser(req: any, res: any) {
    const user = new User(req.body);
    console.log(user);
    return await user.save();
  }
}
