import {useParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {postAction} from "../redux/slices/postsSlice/postSlice.ts";

export const PostPage = () => {
    const {id} = useParams();
    const {post, loadState} = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) dispatch(postAction.loadPost(id))
    }, [id]);
    return (
        <>
            {
                !loadState && <div className='text-2xl'>Loading...</div>
            }
            {
                post && <div>
                    <div>{post.id} - {post.title}</div>
                <div>{post.title}</div>
                </div>
            }
        </>
    );
};