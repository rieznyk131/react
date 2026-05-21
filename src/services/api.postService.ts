import {createAsyncThunk} from "@reduxjs/toolkit";
import {urls} from "../constans/urls.ts";

export const loadPosts = createAsyncThunk(
    'postsSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(urls.posts)


            if(!response.ok) {
                throw new Error(`${response.status} Failed to load posts`);
            }

            const posts = await response.json();

            return thunkAPI.fulfillWithValue(posts);

        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue('Server Error')
        }
    }
)

export const loadPost = createAsyncThunk (
    'postsSlice/loadPost',
    async (id: string, thunkAPI) => {
        try {
            const response = await fetch( 'https://jsonplaceholder.typicode.com/posts/'+id)

            if (!response.ok) {
                throw new Error(`${response.status}. post ${id}`);
            }

            const post = await response.json();
            return thunkAPI.fulfillWithValue(post);

        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue('Server Error')
        }
    }
)