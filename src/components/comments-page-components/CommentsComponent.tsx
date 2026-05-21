import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {CommentComponent} from "./CommentComponent.tsx";
import {postAction} from "../../redux/slices/postsSlice/postSlice.ts";
import {commentActions} from "../../redux/slices/commentsSlice/commentsSlice.ts";
import {userActions} from "../../redux/slices/usersSlice/userSlice.ts";

export const CommentsComponent = () => {
    const {comments, loadState, error} = useAppSelector(state => state.comments);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(commentActions.loadComments())
    },[dispatch])
    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, [dispatch]);
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, [dispatch]);

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
                comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }

        </div>
    );
};