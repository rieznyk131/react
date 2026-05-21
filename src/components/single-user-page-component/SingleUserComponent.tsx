import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/usersSlice/userSlice.ts";
import {postAction} from "../../redux/slices/postsSlice/postSlice.ts";
import {PostComponent} from "../posts-page-components/post/PostComponent.tsx";

export const SingleUserComponent = () => {
    const {id} = useParams();
    const {user, loadState, error} = useAppSelector(state => state.users);
    const posts = useAppSelector(state => state.posts.posts)
    const userPosts = posts.filter(post => post.userId === user?.id)
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) dispatch(userActions.loadUser(id))
    }, [id]);
    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, []);


    return (
        <>
            {
                loadState && <div className='text-2xl'>Loading...</div>
            }
            {error && (
                <div className='text-red-500 text-xl'>
                    Error: {error}
                </div>
            )}
            {
                user && <div className='text-2xl'>{user.id} - {user.name}</div>
            }
            {
                user && userPosts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </>
    )
}