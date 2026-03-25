import type {FC} from "react";
import type {IUser} from "../../models/users/IUser.ts";

type UserPropsType ={
    item: IUser
}

export const UserComponent: FC<UserPropsType> = ({item}) => {
    return (
        <div>
            {
                item.name
            }
        </div>
    );
};