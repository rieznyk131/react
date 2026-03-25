import {useLocation} from "react-router-dom";
import type {IUser} from "../models/users/IUser.ts";

export const SingleUserDetailsPage = () => {

    const {state} = useLocation();
    const user = state as IUser

    return (
        <div>
            {user.username}
        </div>
    );
};