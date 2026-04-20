import axios from "axios";
import type {IUser} from "./models/IUser.ts";

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'},
})

export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get('/users');
    return data;
}

axiosInstance.interceptors.request.use((request) => {

    console.log(request);

    return request
})

export const addUser = async (user: IUser): Promise<IUser> => {
    const {data} = await axiosInstance.post('/users', user);

    return data;
}