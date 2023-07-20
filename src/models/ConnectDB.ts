import mongoose from "mongoose";

export class ConnectDB {
    async connect() {
        return await mongoose.connect('mongodb+srv://nguyenmanhtu09042000:tomtiton01@cluster0.qhm1edm.mongodb.net/instagram');
    }
}