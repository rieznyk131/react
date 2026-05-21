import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.ts";
import {postAction} from "../../../redux/slices/postsSlice/postSlice.ts";
import {PostComponent} from "../post/PostComponent.tsx";
import {userActions} from "../../../redux/slices/usersSlice/userSlice.ts";

export const PostsComponent = () => {
    const {posts, loadState, error} = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch();
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
            <div className='grid grid-cols-3'>
                {
                    posts.map((post) => <PostComponent post={post} key={post.id}/>)
                }
            </div>
        </div>
    );
};