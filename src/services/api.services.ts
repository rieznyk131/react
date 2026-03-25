import type {IUser} from "../models/users/IUser.ts";
import {urls} from "../constans/urls.ts";
import type {IPost} from "../models/posts/IPost.ts";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(value => value.json())
    },
    getUser: async (id: number) => {
        return await fetch(urls.users.byId(id))
            .then(value => value.json())
    }
}

export const postService = {
    getPosts: async (): Promise<IPost[]> => {
        return await fetch(urls.posts.allPosts)
            .then(value => value.json())
    },
    getPost: async (id: number): Promise<IPost> => {
        return await  fetch(urls.posts.byId(id))
            .then(value => value.json())
    },
    getAllPostsOfUserById: async (id:number): Promise<IPost[]> => {
                return await fetch (urls.posts.userPostById(id))
                    .then(value => value.json())
    }
}