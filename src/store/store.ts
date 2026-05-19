import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "./userSlice.ts";
import {useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        // postSlice: postSlice.reducer
    }
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()