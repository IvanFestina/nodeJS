import fileService from "./fileService.js";
import Post from "./Post.js";

class PostService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture);
        const createdPost = await Post.create({...post, picture: fileName});
        return createdPost;
    }
}

export default new PostService()