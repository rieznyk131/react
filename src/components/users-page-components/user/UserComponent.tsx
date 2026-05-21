import type {FC} from "react";
import type {IUser} from "../../../models/users/IUser.ts";
import {Link} from "react-router-dom";

type UserPropsType ={
    user: IUser
}

export const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <div>

                <div key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></div>

        </div>
    );
};