import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.services.ts";
import type {IBaseResponse} from "../../models/iBaseResponse.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        getUsers(currentPage)
            .then(({users}: IBaseResponse) => {setUsers(users)})
    },[searchParams]);
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};