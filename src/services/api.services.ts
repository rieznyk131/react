
import type {IPost} from "../models/posts/IPost.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {urls} from "../constans/urls.ts";

export const postService = {
    getPosts: async (): Promise<IPost[]> => {
        return await fetch(urls.posts.allPosts)
            .then(value => value.json())
    },
    getPost: async (id: number): Promise<IPost> => {
        return await  fetch(urls.posts.byId(id))
            .then(value => value.json())
    }
}



export const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
    async (_, thunkAPI) => {
        try {
            const users = await fetch(urls.users.allUsers)
                .then(value => value.json())

            return thunkAPI.fulfillWithValue(users)
        } catch (error) {
            console.log(error)
            return thunkAPI.fulfillWithValue('Something went wrong on server.')
        }
    }
)