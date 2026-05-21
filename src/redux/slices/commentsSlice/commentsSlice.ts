import type {IComment} from "../../../models/commnets/IComment.ts";
import {createSlice, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {loadComment, loadComments} from "../../../services/api.commentsService.ts";

type CommentsSliceType = {
    comments: IComment[];
    comment: IComment | null;
    loadState: boolean,
    error: string | null
};

const initialState: CommentsSliceType = {
    comments: [],
    comment: null,
    loadState: false,
    error: null
};

export const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: (builder) => builder
        .addCase(loadComments.pending, (state) => {
            state.loadState = true;
            state.error = null;
        })
        .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.loadState = false;
            state.comments = action.payload;
            state.error = null
        })
        .addCase(loadComment.pending, (state) => {
            state.loadState = true;
            state.error = null;
        })
        .addCase(loadComment.fulfilled, (state, action: PayloadAction<IComment>) => {
            state.loadState = false;
            state.comment = action.payload;
            state.error = null
        })
        .addMatcher(isRejected(loadComment, loadComments), (state, action) => {
            state.loadState = false;
            state.error = action.payload as string;
        })
})

export const commentActions = {
    ...commentsSlice.actions,loadComments, loadComment
}