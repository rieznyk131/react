import type {FC} from "react";
import type {IUser} from "../../../models/users/IUser.ts";
import {useNavigate} from "react-router-dom";
import {avatarColors} from "../../../constans/avatarsColor.ts";

type UserPropsType = {
    user: IUser
}

export const UserComponent: FC<UserPropsType> = ({user}) => {


    const {bg, text} = avatarColors[user.id % avatarColors.length];
    const navigate = useNavigate()

    return (
        <div className='bg-white h-auto p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer flex flex-col gap-5'>
            <div className='flex gap-3'>
                <div className={`h-12 w-12 flex items-center justify-center rounded-full font-bold ${bg} ${text} `}>{user.name[0].toUpperCase()}</div>
                <div>
                    <h2 className='font-bold text-gray-800'>{user.name}</h2>
                    <span className='text-sm text-gray-500 font-medium'>{user.username}</span>
                </div>
            </div>
            <div>

                <div>
                    <p><span className='text-sm font-semibold text-gray-500'>Email</span>: <span className='text-sm text-gray-800'>{user.email}</span></p>
                    <p><span className='text-sm font-semibold text-gray-500'>Phone</span>: <span className='text-sm text-gray-800'>{user.phone}</span></p>
                    <p><span className='text-sm font-semibold text-gray-500'>Website</span>: <span className='text-sm text-gray-800'>{user.website}</span></p>
                </div>

                <span className='inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md mt-3'>Company: {user.company.name}</span>
            </div>
            <button onClick={() => navigate(`${user.id}`)}
                    className="px-3 py-1 w-24 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">Details
            </button>
        </div>
    );
};