export default class PostController {
    static createPost(req: any, res: any): Promise<void>;
    static getAllPosts(req: any, res: any): Promise<void>;
    static getPostDetail(req: any, res: any): Promise<void>;
    static postComment(req: any, res: any): Promise<any>;
    static likeOrUnlike(req: any, res: any): Promise<void>;
    static savePost(req: any, res: any): Promise<void>;
    static pagination(req: any, res: any): Promise<any>;
}
