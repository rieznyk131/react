import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks/useAppSelector.ts";
import { useAppDispatch } from "../../../redux/hooks/useAppDispatch.ts";
import { postAction } from "../../../redux/slices/postsSlice/postSlice.ts";
import { PostComponent } from "../post/PostComponent.tsx";
import { userActions } from "../../../redux/slices/usersSlice/userSlice.ts";
import Pagination from '@mui/material/Pagination';

export const PostsComponent = () => {
    const { posts, loadState, error } = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const pageFromUrl = searchParams.get("page");
    const currentPage = pageFromUrl ? parseInt(pageFromUrl, 10) : 1;

    const postsPerPage = 12;

    useEffect(() => {
        dispatch(postAction.loadPosts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, [dispatch]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <main className="p-5">
            {loadState && <div className='text-2xl'>Loading...</div>}
            {error && <div className='text-red-500 text-xl'>Error: {error}</div>}

            <section className='max-w-7xl mx-auto px-4'>
                <h1 className='text-4xl font-bold text-gray-700 mb-6 text-center'>Posts</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' >{
                    currentPosts.map((post) => <PostComponent post={post} key={post.id}/>)
                }</div>
            </section>

            <section className="flex justify-center mt-8">
                <Pagination
                    count={totalPages || 1}
                    page={currentPage}
                    onChange={(_, value) => {
                        if (value === 1) {
                            setSearchParams({});
                        } else {
                            setSearchParams({ page: value.toString() });
                        }
                    }}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                />
            </section>
        </main>
    );
};