import type {IPost} from "../../../models/posts/IPost.ts";
import {createAsyncThunk, createSlice, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {getAll, getById} from "../../../services/api.service.ts";

type PostSliceType = {
    posts: IPost[],
    post: IPost | null,
    loadState: boolean,
    error: string | null
};

const initialState: PostSliceType = {
    posts: [],
    post: null,
    loadState: false,
    error: null
}

const loadPosts = createAsyncThunk(
    'loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await getAll<IPost[]>('/posts');

            return thunkAPI.fulfillWithValue(posts)
        } catch (error) {
            if(error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message + ' posts')
            }
            return thunkAPI.rejectWithValue('Server Error. Unable to load posts')
        }
    }
)

const loadPost = createAsyncThunk(
    'loadPost',
    async (id: string, thunkAPI) => {
        try {
            const post = await  getById<IPost>('/posts', id);
            return thunkAPI.fulfillWithValue(post)
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message + ' post')
            }
            return  thunkAPI.rejectWithValue('Server Error. Unable to load post')
        }
    }
)


export const postSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: (builder) => builder
        .addCase(loadPosts.pending, (state) => {
            state.loadState = true;
            state.error = null;
        })
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
            state.loadState = false;
            state.error = null;
        })
        .addCase(loadPost.pending, (state) => {
            state.loadState = true;
            state.error = null;
        })
        .addCase(loadPost.fulfilled, (state, action: PayloadAction<IPost>) => {
            state.post = action.payload;
            state.loadState = false;
            state.error = null;
        })
        .addMatcher(isRejected(loadPosts, loadPost), (state, action) => {
            state.loadState = false;
            if (typeof action.payload === 'string') {
                state.error = action.payload;
            } else {
                state.error = action.error.message || 'Server Error';
            }
        })
})

export const postAction = {
    ...postSlice.actions, loadPost, loadPosts
}