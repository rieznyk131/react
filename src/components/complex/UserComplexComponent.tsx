import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {PostComplexComponent} from "./PostComplexComponent.tsx";
import {type FC} from "react";
import type {IUser} from "../../models/users/IUser.ts";
import {useNavigate} from "react-router-dom";
import {avatarColors} from "../../constans/avatarsColor.ts";

type UserComplexProps = {
    user: IUser;
}

export const UserComplexComponent: FC<UserComplexProps> = ({user}) => {

    const posts = useAppSelector(state => state.posts.posts)
    const userPosts = user ? posts.filter(post => post.userId === user.id) : []

    const {bg, text} = avatarColors[user.id % avatarColors.length];
    const navigate = useNavigate()


    return (
        <div className='w-full  bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-6'>
                <div className='w-264 bg-white h-auto p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer flex justify-center gap-50'>
                    <div className='flex items-center gap-3'>
                        <div className={`h-24 w-24 flex items-center justify-center rounded-full font-bold ${bg} ${text} `}>{user.name[0].toUpperCase()}</div>
                        <div>
                            <h2 className='text-2xl font-bold text-gray-900'>{user.name}</h2>
                            <span className='text-base text-gray-500 font-medium'>{user.username}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>

                        <div className='text-base'>
                            <p><span className='font-semibold text-gray-500'>Email</span>: <span className='text-gray-800'>{user.email}</span></p>
                            <p><span className='font-semibold text-gray-500'>Phone</span>: <span className='text-gray-800'>{user.phone}</span></p>
                            <p><span className='font-semibold text-gray-500'>Website</span>: <span className='text-gray-800'>{user.website}</span></p>
                        </div>

                        <span className='inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md'>Company: {user.company.name}</span>
                        <button onClick={() => navigate(`${user.id}`)}
                                className="px-3 py-1 w-24 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">Details
                        </button>
                    </div>
                </div>
            <div className='ml-16'>
                <h3 className='ml-5 mt-5 text-2xl'>Posts:</h3>
                <div className='flex flex-col gap-5'>{userPosts.map(post => <PostComplexComponent post={post} key={post.id}/>)}</div>
            </div>
        </div>
    );
}