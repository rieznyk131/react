import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {CommentComponent} from "./CommentComponent.tsx";
import {postAction} from "../../redux/slices/postsSlice/postSlice.ts";
import {commentActions} from "../../redux/slices/commentsSlice/commentsSlice.ts";
import {userActions} from "../../redux/slices/usersSlice/userSlice.ts";
import {Pagination} from "@mui/material";
import {useSearchParams} from "react-router-dom";

export const CommentsComponent = () => {
    const {comments, loadState, error} = useAppSelector(state => state.comments);
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const pageFromUrl = searchParams.get("page");
    const currentPage = pageFromUrl ? parseInt(pageFromUrl, 10) : 1;
    const commentsPerPage = 10

    useEffect(() => {
        dispatch(commentActions.loadComments())
    },[dispatch])
    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, [dispatch]);
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, [dispatch]);

    const lastIndex: number = commentsPerPage * currentPage;
    const firstIndex: number = lastIndex - commentsPerPage;
    const currentComments = comments.slice(firstIndex, lastIndex);
    const totalPages:number = Math.ceil(comments.length/commentsPerPage)

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
                currentComments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
            <Pagination count={totalPages}
            page={currentPage}
            onChange={(_, value) => {
                if (value === 1) {
                    setSearchParams({})
                } else {
                    setSearchParams({page: value.toString()})
                }
            }}
                        color="primary"
                        variant="outlined"
                        shape="rounded"
            />
        </div>
    );
};