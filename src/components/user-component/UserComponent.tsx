import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserProps = {
    user: IUser;
}

export const UserComponent: FC<UserProps> = ({user}) => {
    return (
        <div>
            <p>{user.id} {user.firstName} {user.lastName}</p>

        </div>
    );
};