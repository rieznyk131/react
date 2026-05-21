import type {IUser} from "../../../models/users/IUser.ts";
import {createSlice, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {loadUser, loadUsers} from "../../../services/api.userServices.ts";

type UserSliceType = {
    users: IUser[],
    user: IUser | null,
    loadState: boolean,
    error: string | null

}

const initialState: UserSliceType = {
    users: [],
    user: null,
    loadState: false,
    error: null
}

export const usersSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.pending, (state) => {
                state.loadState = true;
                state.error = null
            })
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
                state.users =  action.payload;
                state.loadState = false;
                state.error = null
            })
            .addCase(loadUser.pending, (state) => {
                state.loadState = true;
                state.error = null
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;
                state.loadState = false;
                state.error = null
            })
            .addMatcher(isRejected(loadUsers, loadUser), (state, action) => {
                state.loadState = false;
                state.error = action.payload as string;
            })

})

export const userActions = {
    ...usersSlice.actions, loadUsers, loadUser
}
