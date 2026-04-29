import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IBaseModel} from "../models/IBaseModel.ts";
import {retriveLocalStorage} from "./helper.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";


type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}
const  axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})


export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const {data: usersWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});

    console.log(usersWithTokens);
    localStorage.setItem('user', JSON.stringify(usersWithTokens));
    return usersWithTokens
}

axiosInstance.interceptors.request.use((requestObj) => {
    if (requestObj.method?.toUpperCase() === "GET") {
        requestObj.headers.authorization = "Bearer " + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObj
})

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IBaseModel>('/products');

    return products
}

export  const refresh = async (): Promise<void> => {
    const iUserWithToken = retriveLocalStorage<IUserWithTokens>('user')
    const {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {refreshToken: retriveLocalStorage<IUserWithTokens>('user').refreshToken, expiresInMins: 1});

    console.log(accessToken);
    console.log(refreshToken);

    iUserWithToken.accessToken = accessToken;
    iUserWithToken.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithToken));
}