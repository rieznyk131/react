import {useEffect, useState} from "react";
import type {IUser} from "../../models/users/IUser.ts";
import {userService} from "../../services/api.services.ts";
import {UserComponent} from "../user/UserComponent.tsx";


export const UsersComponent=  () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers().then((allUsers) => {
            setUsers(allUsers)
        })
    }, []);
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};