import mongoose from "mongoose";
import "dotenv/config";

export class ConnectDB {
  async connect() {
    return await mongoose.connect(process.env.DB_URL);
  }
}
