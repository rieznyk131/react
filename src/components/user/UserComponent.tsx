import type {FC} from "react";
import type {IUser} from "../../models/users/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserPropsType ={
    item: IUser
}

export const UserComponent: FC<UserPropsType> = ({item}) => {
   const navigate = useNavigate();
   const handleOnClick = () => {
       navigate('posts/' + item.id, {state:item})
   }
    return (
        <div className='flex justify-between mb-2.5 w-90 h-8'>
            <Link to={'details'} state={item}>{item.name}</Link>

            <button onClick={handleOnClick} className='border-1 p-0.5 bg-blue-200'>
               Details
            </button>
        </div>
    );
};