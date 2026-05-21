import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {postAction} from "../../redux/slices/postsSlice/postSlice.ts";
import {commentActions} from "../../redux/slices/commentsSlice/commentsSlice.ts";
import {CommentComponent} from "../comments-page-components/CommentComponent.tsx";

export const PostPageComponent = () => {
    const {id} = useParams();
    const {post, loadState, error} = useAppSelector(state => state.posts);
    const comments = useAppSelector(state => state.comments.comments)
    const postComments = post
        ? comments.filter(comment => comment.postId === post.id)
        : [];
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) dispatch(postAction.loadPost(id))
    }, [id]);
    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, [])
    return (
        <div className='ml-5'>
            {
                loadState && <div className='text-2xl'>Loading...</div>
            }
            {error && (
                <div className='text-red-500 text-xl'>
                    Error: {error}
                </div>
            )}
            {
                post && <div className='flex flex-col gap-3'>
                    <p>Post ID: {post.id}</p>
                        <p>Title: {post.title}</p>
                    <p>Post: {post.body}</p>
                </div>
            }
            <h2 className='mt-5 text-2xl'>Comments</h2>
            {
                post && postComments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
};
