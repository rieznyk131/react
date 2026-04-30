import  axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {retrieveLocalStorage} from "./helper.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = { //типізація аргументів функції login
    username: string,
    password: string,
    expiresInMins: number
}

const axiosInstance = axios.create({ //створюємо екземпляр axios з базовими налаштуваннями
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

//створюємо функцію login, котра буде приймати параметри username, password, expiresInMins та буде повертати  IUserWithTokens
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {

    //деструктуруємо data з відповіді та перейменовуємо в userWithTokens
    //виконуємо POST-запит на ендпоінт /login, передаємо username, password, expiresInMins
    const {data: userWithTokens} = await axiosInstance.post("/login", {username, password, expiresInMins});

    //виводимо в консоль отримані дані юзера з токенами
    console.log(userWithTokens);

    //зберігаємо в локальне сховище дані користувача під ключем 'user'
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}


//викликаємо перехоплювач (interceptor) для всіх HTTP запитів
axiosInstance.interceptors.request.use((requestObj) => {

  //перевіряємо, якщо це GET-запит, то додаємо в заголовок Authorization Bearer + accessToken (токен беремо з локального сховища, за допомогою функції retrieveLocalStorage)
    if (requestObj.method?.toUpperCase() === "GET") {
        requestObj.headers.Authorization = "Bearer " + retrieveLocalStorage<IUserWithTokens>('user').accessToken
    }

    //Повертаємо об'єкт запиту
    return requestObj;
});

//оголошуємо ф-цію loadAuthProducts, котра буде повертати масив IProduct
export const loadAuthProducts = async (): Promise<IProduct[]> => {

    //деструктуруємо data та products з відповіді сервера
    //виконуємо GET-запит на ендпоінт /products
    const {data: {products}} = await axiosInstance.get<IBaseResponseModel>('/products');

    //повертаємо масив products
    return products;
}

//оголошуємо функцію refresh, яка буде оновлювати access токен
export const refresh = async (): Promise<void> => {

    //за допомогою ф-ції retrieveLocalStorage отримуємо об'єкт з юзером
    const iUserWithTokens = retrieveLocalStorage<IUserWithTokens>('user');

    //робимо POST-запит на ендпоінт /refresh
    // надсилаємо refresh токен з локального сховища
    //зазначаємо час життя 1 хвилину.
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {refreshToken: retrieveLocalStorage<IUserWithTokens>('user').refreshToken, expiresInMins: 1});

    //виводимо в консоль нові access та refresh токени
    console.log(accessToken);
    console.log(refreshToken);

    //визначаємо нові access та refresh токени для об'єкту iUserWithTokens
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;

    //оновлюємо дані юзера в локальному сховищі
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}