/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export default class UserController {
    static createUser(req: any, res: any): Promise<import("mongoose").Document<unknown, {}, {
        avatarUrl: string;
        bio: string;
        gender: string;
        posts: {
            post?: import("mongoose").Types.ObjectId;
        }[];
        saved: {
            post?: import("mongoose").Types.ObjectId;
        }[];
        followers: {
            user?: import("mongoose").Types.ObjectId;
        }[];
        following: {
            user?: import("mongoose").Types.ObjectId;
        }[];
        userName?: string;
        fullName?: string;
        password?: string;
    }> & {
        avatarUrl: string;
        bio: string;
        gender: string;
        posts: {
            post?: import("mongoose").Types.ObjectId;
        }[];
        saved: {
            post?: import("mongoose").Types.ObjectId;
        }[];
        followers: {
            user?: import("mongoose").Types.ObjectId;
        }[];
        following: {
            user?: import("mongoose").Types.ObjectId;
        }[];
        userName?: string;
        fullName?: string;
        password?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static getUser(req: any, res: any): Promise<any>;
}
