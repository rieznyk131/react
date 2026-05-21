import {createAsyncThunk} from "@reduxjs/toolkit";
import {urls} from "../constans/urls.ts";

export const loadPosts = createAsyncThunk(
    'postsSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await fetch(urls.posts)
                .then(value => value.json())
            return thunkAPI.fulfillWithValue(posts);
        } catch (error) {
            console.log(error)
            return thunkAPI.fulfillWithValue('Something went wrong on server.')
        }
    }
)

export const loadPost = createAsyncThunk (
    'postsSlice/loadPost',
    async (id: string, thunkAPI) => {
        try {
            const post = await fetch( 'https://jsonplaceholder.typicode.com/posts/'+id)
                .then(value => value.json())

            return thunkAPI.fulfillWithValue(post)
        } catch (error) {
            console.log(error)
            return thunkAPI.fulfillWithValue('Something went wrong on server.')
        }
    }
)