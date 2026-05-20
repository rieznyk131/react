import type {IPost} from "../models/posts/IPost.ts";
import {urls} from "../constans/urls.ts";

export const postService = {
    getPosts: async (): Promise<IPost[]> => {
        return await fetch(urls.posts)
            .then(value => value.json())
    }}