import type {IUser} from "../models/IUser.ts";

const getUsers = async (): Promise<IUser[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

const getUser = async(): Promise<IUser> => {
    // @ts-expect-error нет переменной user
    return await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
    .then(value => value.json())
}

export {
    getUsers,
    getUser
}

