import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "../slices/usersSlice/userSlice.ts";
import {postSlice} from "../slices/postsSlice/postSlice.ts";
import {commentsSlice} from "../slices/commentsSlice/commentsSlice.ts";

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        posts: postSlice.reducer,
        comments: commentsSlice.reducer
    }
});

