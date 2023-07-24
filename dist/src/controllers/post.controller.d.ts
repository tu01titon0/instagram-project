export default class PostController {
    static createPost(req: any, res: any): Promise<void>;
    static getAllPosts(req: any, res: any): Promise<void>;
    static getPostDetail(req: any, res: any): Promise<void>;
}
