import {type FC} from "react";
import type {IUser} from "../../../models/IUser.ts";
import {useNavigate} from "react-router-dom";

type UserProps = {
    item: IUser;
}

export const UserComponent: FC<UserProps> = ({item}) => {
    const navigation = useNavigate()

    const onButtonClickNavigate = () => {
        navigation('/users/' + item.id + '/carts', {state: {user: item}})
    }

    return (
        <div className='flex flex-row justify-between w-100 h-20'>
            <div>
                <p>{item.username}</p>
                <p>{item.email}</p>
            </div>
            <button className='border border-gray-300 w-20 h-10 bg-gray-200 rounded-xl cursor-pointer' onClick={onButtonClickNavigate}>
                Cart
            </button>
        </div>
    );
};