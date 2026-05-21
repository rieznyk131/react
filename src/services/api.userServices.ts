import {createAsyncThunk} from "@reduxjs/toolkit";
import {urls} from "../constans/urls.ts";

export const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
    async (_, thunkAPI) => {
        try {
            const response = await fetch(urls.users)


            if(!response.ok) {
                throw new Error(`${response.status} Failed to load users`);
            }

            const users = await response.json();

            return thunkAPI.fulfillWithValue(users);

        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue('Server Error')
        }
    }
)

export const loadUser = createAsyncThunk(
    "userSlice/loadUser",
    async (id:string, thunkAPI) => {
        try {
            const response = await fetch( 'https://jsonplaceholder.typicode.com/users/'+id)

            if (!response.ok) {
                throw new Error(`${response.status}. Failed to load user ${id}`);
            }

            const user = await response.json();
            return thunkAPI.fulfillWithValue(user);

        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue('Server Error')
        }
    }
)