import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {commentActions} from "../../redux/slices/commentsSlice/commentsSlice.ts";
import {postAction} from "../../redux/slices/postsSlice/postSlice.ts";

export const SingleCommentComponent = () => {
    const {id} = useParams();
    const {comment, loadState, error} = useAppSelector(state => state.comments);
    const posts = useAppSelector(state => state.posts.posts);
    const post = comment && posts.find(post => post.id === comment.postId)
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) dispatch(commentActions.loadComment(id));
    }, [id])
    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, []);
    return (
        <div>

            {
                loadState && <div className='text-2xl'>Loading...</div>
            }
            {error && (
                <div className='text-red-500 text-xl'>
                    Error: {error}
                </div>
            )}
            {
                comment &&
                <div>
                    {post && <p>Post: <Link to={`/posts/${post.id}`}>{post.title}</Link></p>}
                    <p>Comment ID: {comment.id}</p>
                    <p>Author: {comment.email}</p>
                    <p>Title: {comment.name}</p>
                    <p>Body: {comment.body}</p>
                </div>
            }
        </div>
    );
};