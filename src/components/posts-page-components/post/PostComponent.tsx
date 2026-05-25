import type {FC} from "react";
import type {IPost} from "../../../models/posts/IPost.ts";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";
import {postsCovers} from "../../../constans/posts-covers.ts";
import {Link} from "react-router-dom";
import {avatarColors} from "../../../constans/avatarsColor.ts";

type PostPropsType = {
    post: IPost;
}


export const PostComponent: FC<PostPropsType> = ({post}) => {
    const postCover = postsCovers[post.id % postsCovers.length]
    const {text, bg} = avatarColors[post.id % avatarColors.length]
    const users = useAppSelector(state => state.users.users);
    const user = users.find(user => user.id === post.userId)
    return (
        <article className='bg-white p-5 rounded-2xl border border-gray-100 flex flex-col gap-3 min-h-60 md:h-120'>
                <img src={postCover}
                     alt={`Cover image for ${post.title}`}
                     className="object-cover rounded-xl w-full h-48"
                     loading={"lazy"}
                />
            <Link to={`${post.id}`} className='hover:text-blue-700  capitalize line-clamp-3  text-lg font-bold text-gray-900 mb-2'>{post.title}</Link>
            <p className='line-clamp-3 text-gray-600'>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
            {
                user && <footer className='flex items-center gap-5 mt-auto pt-2'>
                    <div className={`w-10 h-10 rounded-full ${bg} ${text} flex justify-center items-center font-bold`}>{user.name[0]}</div>
                    <span className='text-base font-semibold text-gray-700'>{user.name}</span>
                </footer>
            }

        </article>
    );
};