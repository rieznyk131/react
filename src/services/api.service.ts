import type {IUser} from "../models/IUser.ts";


const getUsers = async (): Promise<IUser[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
}

const getUser = async(): Promise<IUser> => {
    // @ts-expect-error нет переменной user
    return await fetch(import.meta.env.VITE_API_URL + '/' + id)
    .then(value => value.json())
}

export {
    getUsers,
    getUser
}

