import {createAsyncThunk} from "@reduxjs/toolkit";
import {urls} from "../constans/urls.ts";

export const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
    async (_, thunkAPI) => {
        try {
            const users = await fetch(urls.users)
                .then(value => value.json())

            return thunkAPI.fulfillWithValue(users)
        } catch (error) {
            console.log(error)
            return thunkAPI.fulfillWithValue('Something went wrong on server.')
        }
    }
)

export const loadUser = createAsyncThunk(
    "userSlice/loadUser",
    async (id:string, thunkAPI) => {
        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/users/' +id)
                .then(value => value.json())

            return thunkAPI.fulfillWithValue(user)
        } catch (error) {
            console.log(error)
            return thunkAPI.fulfillWithValue('Something went wrong on server.')
        }
    }
)