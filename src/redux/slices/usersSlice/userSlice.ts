import type {IUser} from "../../../models/users/IUser.ts";
import {createAsyncThunk, createSlice, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {getAll, getById} from "../../../services/api.service.ts";

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

const loadUsers = createAsyncThunk(
    'loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await getAll<IUser[]>('/users');

            return thunkAPI.fulfillWithValue(users)
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message + ' users')
            }
            return thunkAPI.rejectWithValue('Server Error. Unable to load users')
        }


    }
)

const loadUser = createAsyncThunk(
    'loadUser',
    async(id:string, thunkAPI) => {
        try {
            const user = await getById<IUser>('/users', id);
            return thunkAPI.fulfillWithValue(user)
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message +' user')
            }
            return  thunkAPI.rejectWithValue('Server Error. Unable to load user')
        }
    }

)



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
                if (typeof action.payload === 'string') {
                    state.error = action.payload;
                } else {
                    state.error = action.error.message || 'Server Error';
                }

            })

})

export const userActions = {
    ...usersSlice.actions, loadUsers, loadUser
}
