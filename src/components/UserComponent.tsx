import {type FC, memo} from "react";
import type {IUser} from "../models/IUser.ts";

type UserProps = {
    user: IUser
}

export const UserComponent: FC <UserProps>= memo(({user}) => {


    return (
        <div>
            {user.name}
        </div>
    );
});