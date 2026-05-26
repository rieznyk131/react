import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import type {FC} from "react";
import type {IPost} from "../../models/posts/IPost.ts";
import {CommentComponent} from "../comments-page-components/CommentComponent.tsx";

type PostProps = {
    post: IPost;
}

export const PostComplexComponent: FC<PostProps> = ({post}) => {
    const comments = useAppSelector(state => state.comments.comments)
    const postComments = comments.filter(comment => post.id === comment.postId)

    return (
        <div className=''>
            <div className='ml-5 mt-5'>
                <span className='text-xs font-semibold text-blue-600 uppercase tracking-wider'>Post #{post.id}</span>
                <p className='text-lg font-bold text-gray-900 capitalize'>{post.title}</p>
                <p className='text-gray-700 text-lg leading-relaxed'>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
            </div>
            <div  className='ml-16'>
                <h3 className='text-xl ml-5 mt-5'>Comments</h3>
                <div>
                    {
                        postComments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
                    }
                </div>
            </div>
        </div>
    )
}