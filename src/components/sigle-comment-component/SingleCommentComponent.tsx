import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {commentActions} from "../../redux/slices/commentsSlice/commentsSlice.ts";
import {postAction} from "../../redux/slices/postsSlice/postSlice.ts";
import {avatarColors} from "../../constans/avatarsColor.ts";

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
    if (!comment) {
        return <div className="p-8 text-center text-gray-500">Loading comment data...</div>;

    }
        const {bg, text} = avatarColors[comment.id % avatarColors.length]


    return (
        <main className='min-h-screen bg-gray-50 px-4 py-10 flex justify-center items-start'>

            {loadState && (
                <div className='text-xl font-medium text-gray-500 animate-pulse'>
                    Loading...
                </div>
            )}

            {error && (
                <div className='rounded-xl border border-red-200 bg-red-50 px-6 py-4 text-red-600 shadow-sm'>
                    Error: {error}
                </div>
            )}

            {comment && (
                <article className='w-full max-w-3xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md'>

                    {post && (
                        <div className='border-b border-gray-100 bg-gray-50 px-6 py-4'>
                            <p className='text-sm text-gray-500 mb-1'>Related post</p>

                            <Link
                                to={`/posts/${post.id}`}
                                className='text-lg font-semibold text-gray-900 transition-colors hover:text-blue-600'
                            >
                                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                            </Link>
                        </div>
                    )}


                    <div className='flex flex-col gap-8 p-6 md:flex-row'>

                        <header className='flex shrink-0 flex-row gap-4 md:w-64 md:flex-col md:gap-3'>

                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold shadow-sm ${bg} ${text}`}
                            >
                                {comment.email[0].toUpperCase()}
                            </div>

                            <div className='flex flex-col gap-1'>
                        <span className='text-xs font-semibold uppercase tracking-[0.2em] text-blue-600'>
                            Comment #{comment.id}
                        </span>

                                <p className='break-all text-sm font-medium text-gray-700'>
                                    {comment.email}
                                </p>
                            </div>
                        </header>

                        {/* Divider */}
                        <div className='hidden w-px bg-gray-100 md:block'></div>

                        {/* Comment */}
                        <div className='flex flex-1 flex-col gap-4'>

                            <h1 className='text-2xl font-bold leading-tight text-gray-900'>
                                {comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}
                            </h1>

                            <p className='leading-8 text-gray-600'>
                                {comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}
                            </p>
                        </div>
                    </div>
                </article>
            )}
        </main>
    );
};