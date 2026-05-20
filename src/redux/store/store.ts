import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "../slices/usersSlice/userSlice.ts";

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        // postSlice: postSlice.reducer
    }
});

