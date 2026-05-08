import {UserComponent} from "./UserComponent.tsx";
import {useFetch} from "../hooks/useFetch.tsx";
import type {IUser} from "../models/IUser.ts";


export const UsersComponent = () => {
const users = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
            {
                users?.map((user) => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};