import type {IPost} from "../../../models/posts/IPost.ts";
import {createSlice} from "@reduxjs/toolkit";

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
    name: 'postSlice',
    initialState: initialState,
    reducers: {},
})