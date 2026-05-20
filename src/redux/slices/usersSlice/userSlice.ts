import type {IUser} from "../../../models/users/IUser.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {loadUsers} from "../../../services/api.services.ts";

type UserSliceType = {
    users: IUser[]
}

const initialState: UserSliceType = {
    users: []
}


export const usersSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>)=>{
            state.users = action.payload
        })
})

export const userActions = {
    ...usersSlice.actions, loadUsers
}
