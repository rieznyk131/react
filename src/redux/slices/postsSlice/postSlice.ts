import type {IPost} from "../../../models/posts/IPost.ts";
import {createSlice, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {loadPost, loadPosts} from "../../../services/api.postService.ts";

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
            state.error =  action.payload as string;
        })
})

export const postAction = {
    ...postSlice.actions, loadPost, loadPosts
}