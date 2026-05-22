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
        <div>
            <div className='ml-5 mt-5'>
                <p className='text-xl font-bold'>Post ID: {post.id}</p>
                <p>Title: {post.title}</p>
                <p>Post: {post.body}</p>
            </div>
            <div>
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