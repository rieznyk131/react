import {UserComponent} from "../users-page-components/user/UserComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {PostComplexComponent} from "./PostComplexComponent.tsx";
import type {FC} from "react";
import type {IUser} from "../../models/users/IUser.ts";

type UserComplexProps = {
    user : IUser;
}

export const UserComplexComponent: FC<UserComplexProps> = ({user}) => {

    const posts = useAppSelector(state => state.posts.posts )
    const userPosts = user ? posts.filter(post => post.userId === user.id) : []


    return (
        <div>

            <h2 className='text-3xl mt-5'>{user && <UserComponent user={user}/>}</h2>
            <h3 className='ml-5 mt-5 text-2xl'>Posts:</h3>
            {userPosts.map(post => <PostComplexComponent post={post} key={post.id}/>)}
        </div>
    );
}