import type {IComment} from "../../../models/commnets/IComment.ts";
import {createAsyncThunk, createSlice, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {getAll, getById} from "../../../services/api.service.ts";


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

const loadComments = createAsyncThunk(
    'loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await getAll<IComment[]>('/comments');
            return thunkAPI.fulfillWithValue(comments);
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message + " comments");
            }
            return thunkAPI.rejectWithValue('Server Error. Unable to load comments');
        }
}
);

const loadComment = createAsyncThunk(
    'loadComment',
    async (id: string, thunkAPI) => {
        try {
            const comment = await getById<IComment>('/comments', id);
            return thunkAPI.fulfillWithValue(comment)
        } catch (error) {
            if(error instanceof Error) {
                return  thunkAPI.rejectWithValue(error.message + ' comment')
            }
            return thunkAPI.rejectWithValue('Server Error. Unable to load comments');
        }
    }
)

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
            if (typeof action.payload === 'string') {
                state.error = action.payload;
            } else {
                state.error = action.error.message || 'Server Error';
            }
        })
})

export const commentActions = {
    ...commentsSlice.actions,loadComments, loadComment
}