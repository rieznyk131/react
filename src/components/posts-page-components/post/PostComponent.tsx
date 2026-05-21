import type {FC} from "react";
import type {IPost} from "../../../models/posts/IPost.ts";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";
import {Link} from "react-router-dom";

type PostPropsType = {
    post: IPost;
}

export const PostComponent: FC<PostPropsType> = ({post}) => {
    const users = useAppSelector(state => state.users.users);
    const user = users.find(user => user.id === post.userId)
    return (
        <div className='m-5 border-1 w-100 h-22 p-2 flex flex-col justify-center gap-3'>
            <p><Link to={`/posts/${post.id}`}>{post.title}</Link></p>
            {
                user && <p>Author: <Link to={`/users/${user.id}`}>{user.name}</Link></p>
            }

        </div>
    );
};