import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {postAction} from "../../redux/slices/postsSlice/postSlice.ts";
import {commentActions} from "../../redux/slices/commentsSlice/commentsSlice.ts";
import {CommentComponent} from "../comments-page-components/CommentComponent.tsx";
import {postsCovers} from "../../constans/posts-covers.ts";

export const PostPageComponent = () => {
    const {id} = useParams();
    const {post, loadState, error} = useAppSelector(state => state.posts);
    const comments = useAppSelector(state => state.comments.comments)
    const postComments = post
        ? comments.filter(comment => comment.postId === post.id)
        : [];
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) dispatch(postAction.loadPost(id))
    }, [id]);

    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, [])

    if (!post) {
        return <div className="p-8 text-center text-gray-500">Loading post data...</div>;
    }
    const postCover = postsCovers[post.id % postsCovers.length] ?? {bg: "bg-gray-100", text: "text-gray-600"};

    return (
        <main className='w-4xl mx-auto px-4 py-8 flex justify-center'>
            {
                loadState && <div className='text-2xl'>Loading...</div>
            }
            {error && (
                <div className='text-red-500 text-xl'>
                    Error: {error}
                </div>
            )}
            {
                post && <article
                    className='w-full  bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <img src={postCover}
                             alt={`image for ${post.title}`}
                             className="object-cover rounded-xl w-full h-72"
                             loading={"lazy"}
                        />
                        <header className='flex flex-col gap-2'>
                            <span
                                className='text-xs font-semibold text-blue-600 uppercase tracking-wider'>Post #{post.id}</span>
                            <h1 className='text-2xl md:text-3xl font-bold text-gray-900 capitalize'>{post.title}</h1>
                        </header>
                        <p className='text-gray-700 text-lg leading-relaxed'>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
                    </div>
                    <hr className='border-gray-100 my-2'/>
                    <section className='flex flex-col gap-4'>
                        <h2 className='text-xl font-bold text-gray-900'>Comments</h2>
                        <div className='flex flex-col gap-3'>
                            {
                                post && postComments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
                            }
                        </div>
                    </section>
                </article>
            }

        </main>
    );
};
