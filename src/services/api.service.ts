import type {IPosts} from "../models/IPostModel.ts";
import type {IPostsDummyJsonModel} from "../models/IPostsDummyJsonModel.ts";

export const getPosts = async (): Promise<IPosts[]> => {
    const response: IPostsDummyJsonModel = await fetch(import.meta.env.VITE_API_BASE_URL + "/posts")
        .then(res => res.json());

    return response.posts;
}