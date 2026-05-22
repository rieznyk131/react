// import {useEffect} from "react";
// import {useAppSelector} from "../../../redux/hooks/useAppSelector.ts";
// import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.ts";
// import {postAction} from "../../../redux/slices/postsSlice/postSlice.ts";
// import {PostComponent} from "../post/PostComponent.tsx";
// import {userActions} from "../../../redux/slices/usersSlice/userSlice.ts";
// import {Pagination} from "@mui/material";
// import {useSearchParams} from "react-router-dom";
// import * as sea from "node:sea";
//
// export const PostsComponent = () => {
//     const {posts, loadState, error} = useAppSelector(state => state.posts)
//     const dispatch = useAppDispatch();
//     const [searchParams, setSearchParams] = useSearchParams()
//     const pageFromURL = searchParams.get('page');
//     const currentPage = pageFromURL ? parseInt(pageFromURL, 10) : 0;
//     const postsPerPage: number = 9;
//
//     useEffect(() => {
//         dispatch(postAction.loadPosts())
//     }, [dispatch]);
//     useEffect(() => {
//         dispatch(userActions.loadUsers())
//     }, [dispatch]);
//
//     const indexOfLastPost: number = currentPage * postsPerPage;
//     const indexOfFirstPost:number = indexOfLastPost - postsPerPage;
//     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
//     const totalPages: number = Math.ceil(posts.length / postsPerPage);
//
//     return (
//         <div>
//             {
//                 loadState && <div className='text-2xl'>Loading...</div>
//             }
//             {error && (
//                 <div className='text-red-500 text-xl'>
//                     Error: {error}
//                 </div>
//             )}
//             <div className='grid grid-cols-3'>
//                 {
//                     currentPosts.map((post) => <PostComponent post={post} key={post.id}/>)
//                 }
//             </div>
//
//             <Pagination count={totalPages}
//                         page={currentPage}
//                         onChange={(_, value) => {
//                             if (value === 1) {
//                                 searchParams.delete("page");
//                                 setSearchParams(searchParams)
//                             } else {
//                                 setSearchParams({page: value.toString()})
//                             }
//                         }}
//                         color="standard" />
//
//         </div>
//     );
// };

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

    const postsPerPage = 9;

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
        <div className="p-5">
            {loadState && <div className='text-2xl'>Loading...</div>}
            {error && <div className='text-red-500 text-xl'>Error: {error}</div>}

            <div className='grid grid-cols-3 gap-4'>
                {
                    currentPosts.map((post) => <PostComponent post={post} key={post.id}/>)
                }
            </div>

            <div className="flex justify-center mt-8">
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
            </div>
        </div>
    );
};