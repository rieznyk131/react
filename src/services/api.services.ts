import type {IUsersJP} from "../models/JsonPlaceholder/IUsersJP.ts";
import {urlJsonPlaceholder} from "../constans/urlsJsonPlaceholder.ts";
import type {IUserDJ} from "../models/DummyJson/IUserDJ.ts";
import type {
    CommentsDummyJsonModel,
    PostsDummyJsonModel,
    UsersDummyJsonModel
} from "../models/DummyJson/DummyJsonModel.ts";
import {urlDummyJson} from "../constans/urlsDummyJson.ts";
import type {IPostJP} from "../models/JsonPlaceholder/IPostsJP.ts";
import type {IPostDJ} from "../models/DummyJson/IPostDJ.ts";
import type {ICommentJP} from "../models/JsonPlaceholder/ICommentsJP.ts";
import type {ICommentDJ} from "../models/DummyJson/ICommentDJ.ts";

export const usersService = {
    getUsersJP: async (): Promise<IUsersJP[]> => {
        return await fetch(urlJsonPlaceholder.users.allUsers)
            .then(value => value.json())
    },
    getUsersDJ: async (): Promise<IUserDJ[]> => {
        const response: UsersDummyJsonModel = await fetch(urlDummyJson.users.allUsers)
            .then(value => value.json())
        return response.users
    }
}

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

export const commentsService = {
    getCommentsJP: async(): Promise<ICommentJP[]> => {
        return await fetch(urlJsonPlaceholder.comments.allComments)
            .then(value => value.json())
    },
    getCommentDJ: async (): Promise<ICommentDJ[]> => {
        const response: CommentsDummyJsonModel = await fetch(urlDummyJson.comments.allComments)
            .then(value => value.json());
        return response.comments
    }
}