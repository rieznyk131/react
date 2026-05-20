import type {IUser} from "../../../models/users/IUser.ts";
import {createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {loadUser, loadUsers} from "../../../services/api.userServices.ts";

type UserSliceType = {
    users: IUser[],
    user: IUser | null,
    loadState: boolean
}

const initialState: UserSliceType = {
    users: [],
    user: null,
    loadState: false

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
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>)=>{
            state.users = action.payload
        })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload
            })
            .addMatcher(isFulfilled(loadUser, loadUsers), (state) => {
                state.loadState = true
            })
            .addMatcher(isRejected (loadUser, loadUsers), (state) => {
                state.loadState = true
            })
})

export const userActions = {
    ...usersSlice.actions, loadUsers, loadUser
}
