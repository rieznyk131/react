import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "../slices/usersSlice/userSlice.ts";
import {postSlice} from "../slices/postsSlice/postSlice.ts";

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        posts: postSlice.reducer
    }
});

