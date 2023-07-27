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
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from "mongoose";
declare const Post: import("mongoose").Model<{
    createAt: Date;
    description: string;
    comments: {
        created: Date;
        comment?: string;
        postedBy?: import("mongoose").Types.ObjectId;
    }[];
    likes: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    saved: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    user?: import("mongoose").Types.ObjectId;
    imgUrl?: string;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createAt: Date;
    description: string;
    comments: {
        created: Date;
        comment?: string;
        postedBy?: import("mongoose").Types.ObjectId;
    }[];
    likes: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    saved: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    user?: import("mongoose").Types.ObjectId;
    imgUrl?: string;
}> & {
    createAt: Date;
    description: string;
    comments: {
        created: Date;
        comment?: string;
        postedBy?: import("mongoose").Types.ObjectId;
    }[];
    likes: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    saved: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    user?: import("mongoose").Types.ObjectId;
    imgUrl?: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    createAt: Date;
    description: string;
    comments: {
        created: Date;
        comment?: string;
        postedBy?: import("mongoose").Types.ObjectId;
    }[];
    likes: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    saved: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    user?: import("mongoose").Types.ObjectId;
    imgUrl?: string;
}, import("mongoose").Document<unknown, {}, {
    createAt: Date;
    description: string;
    comments: {
        created: Date;
        comment?: string;
        postedBy?: import("mongoose").Types.ObjectId;
    }[];
    likes: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    saved: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    user?: import("mongoose").Types.ObjectId;
    imgUrl?: string;
}> & {
    createAt: Date;
    description: string;
    comments: {
        created: Date;
        comment?: string;
        postedBy?: import("mongoose").Types.ObjectId;
    }[];
    likes: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    saved: {
        user?: import("mongoose").Types.ObjectId;
    }[];
    user?: import("mongoose").Types.ObjectId;
    imgUrl?: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default Post;
