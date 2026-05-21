import type {IPost} from "../../../models/posts/IPost.ts";
import {createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {loadPost, loadPosts} from "../../../services/api.postService.ts";

type PostSliceType = {
    posts: IPost[],
    post: IPost | null,
    loadState: boolean
};

const initialState: PostSliceType = {
    posts: [],
    post: null,
    loadState: false
}

export const postSlice = createSlice({
    name: 'postsSlice',
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: (builder) => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        })
        .addCase(loadPosts.rejected, (state, action) => {
            console.log(state);
            console.log(action);
        })
        .addCase(loadPost.fulfilled, (state, action: PayloadAction<IPost>) => {
            state.post = action.payload
        })
        .addMatcher(isFulfilled(loadPost, loadPosts), (state) => {
            state.loadState = true
        })
        .addMatcher(isRejected(loadPost, loadPosts), (state) => {
            state.loadState = true
        })
})

export const postAction = {
    ...postSlice.actions, loadPost, loadPosts
}