import {useEffect, useState} from "react";
import type {IUser} from "../../../models/IUser.ts";
import {getAll} from "../../../services/general.api.service.ts";
import type {IBaseResponseModel} from "../../../models/IBaseResponseModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & {users: IUser[]}>('/users').then(({users}) => setUsers(users));
    },[])
    return (
        <div className='m-10'>
            <h1 className='m-10 text-center text-2xl text-[#e6b3ec] '>DummyJSON Users</h1>

            <div className='m-auto grid grid-cols-2 justify-items-center gap-y-20 w-3/4'>
                {
                    users.map(user => <UserComponent item={user} key={user.id}/>)
                }
            </div>
        </div>
    );
};