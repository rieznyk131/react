import {createAsyncThunk} from "@reduxjs/toolkit";
import {urls} from "../constans/urls.ts";

export const loadComments = createAsyncThunk(
    'commentsSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(urls.comments)

            if(!response.ok) {
                throw new Error(`${response.status}. Failed to load comments`)
            }
            const comments = await response.json()
            return thunkAPI.fulfillWithValue(comments)
        } catch (error) {
            if(error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
            }
            return thunkAPI.rejectWithValue('Server Error')
        }
    }
)

export const loadComment = createAsyncThunk(
    'commentsSlice/loadComment',
    async (id:string, thunkAPI) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments/'+id)

            if(!response.ok) {
                throw new Error(`${response.status}. Failed to load comment ${id}`)
            }

            const comment = await response.json()
            return thunkAPI.fulfillWithValue(comment)
        } catch (error) {
            if(error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
            }
            return thunkAPI.rejectWithValue('Server Error')
        }
    }
)