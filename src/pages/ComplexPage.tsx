import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/usersSlice/userSlice.ts";
import {postAction} from "../redux/slices/postsSlice/postSlice.ts";
import {commentActions} from "../redux/slices/commentsSlice/commentsSlice.ts";
import {UserComplexComponent} from "../components/complex/UserComplexComponent.tsx";

export const ComplexPage = () => {
    const dispatch = useAppDispatch();

    const users = useAppSelector(state => state.users.users)
    const posts = useAppSelector(state => state.posts.posts)
    const comments = useAppSelector(state => state.comments.comments)

    useEffect(() => {
        if (!users.length) {
            dispatch(userActions.loadUsers())
        }
        if (!posts.length) {
            dispatch(postAction.loadPosts())
        }
        if (!comments.length) {
            dispatch(commentActions.loadComments())
        }
    }, []);
    return (
        <>
            {
                users.map(user => <UserComplexComponent user={user} key={user.id}/>)
            }
        </>
    );
};