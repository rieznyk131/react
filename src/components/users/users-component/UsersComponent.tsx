import {useEffect, useState} from "react";
import type {IUser} from "../../../models/IUser.ts";
import type {IUserResponseModel} from "../../../models/IUserResponseModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {userService} from "../../../services/api.services.ts";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUserResponseModel) => {setUsers(users);});
    },[])
    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} item={user}/>)
            }

        </div>
    );
};