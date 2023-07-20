import mongoose from "mongoose";
import "dotenv/config";
export declare class ConnectDB {
    connect(): Promise<typeof mongoose>;
}
