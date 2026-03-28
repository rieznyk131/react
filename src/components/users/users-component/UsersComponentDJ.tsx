import {useEffect, useState} from "react";
import type {IUserDJ} from "../../../models/DummyJson/IUserDJ.ts";
import {usersService} from "../../../services/users.api.services.ts";
import {UserComponentDJ} from "../user-component/UserComponentDJ.tsx";

export const UsersComponentDJ = () => {
    const [users, setUsers] = useState<IUserDJ[]>([]);
    useEffect(() => {
        usersService.getUsersDJ().then((allUsers) => setUsers(allUsers));
    }, [])

    return (
        <div className='m-10'>
            <h1 className='m-10 text-center text-2xl text-[#e6b3ec]'>DummyJSON Users</h1>

            <div className='m-auto grid grid-cols-2 justify-items-center gap-y-20 w-3/4'>
                {
                    users.map(user => <UserComponentDJ item={user} key={user.id}/>)
                }
            </div>
        </div>
    );
};