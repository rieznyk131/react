import {useEffect, useState} from "react";
import type {IUsersJP} from "../../../models/JsonPlaceholder/IUsersJP.ts";
import {usersService} from "../../../services/users.api.services.ts";
import {UserComponentJP} from "../user-component/UserComponentJP.tsx";

export const UsersComponentJP = () => {
    const [users, setUsers] = useState<IUsersJP[]>([]);
    useEffect(() => {
        usersService.getUsersJP().then((allUsers)=> setUsers(allUsers));
    },[])
    return (
        <div>
            <h1 className='m-10 text-center text-2xl text-[#e6b3ec]'>JSONPlaceholder Users</h1>

            <div className='m-auto grid grid-cols-2 justify-items-center gap-y-20 w-3/4'>
                {
                    users.map(user => <UserComponentJP item={user} key={user.id}/>)
                }
            </div>
        </div>
    );
};