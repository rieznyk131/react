import {useState, useEffect} from "react";
import type {IUser} from '../models/IUser.ts'
import {UserComponent} from '../user-component/UserComponent.tsx'
import {getUsers} from "../services/api.service.ts";

export const UsersComponent =() => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers()
        .then(response => setUsers(response));
        return () => {
            console.log('done');
        }
    },[])
    return (
        <div className='m-auto grid grid-cols-2 justify-items-center gap-y-20 w-3/4'>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    )}


