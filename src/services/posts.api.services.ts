import type {IPostJP} from "../models/JsonPlaceholder/IPostsJP.ts";
import {urlJsonPlaceholder} from "../constans/urlsJsonPlaceholder.ts";
import type {IPostDJ} from "../models/DummyJson/IPostDJ.ts";
import type {PostsDummyJsonModel} from "../models/DummyJson/DummyJsonModel.ts";
import {urlDummyJson} from "../constans/urlsDummyJson.ts";

export const postsService = {
    getPostsJP: async (): Promise<IPostJP[]> => {
        return await  fetch(urlJsonPlaceholder.posts.allPosts)
            .then(value => value.json())
    },

    getPostsDJ: async (): Promise<IPostDJ[]> => {
        const response: PostsDummyJsonModel = await fetch(urlDummyJson.posts.allPosts)
            .then(value => value.json());
        return response.posts
    }
}