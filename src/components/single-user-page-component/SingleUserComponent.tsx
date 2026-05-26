import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/usersSlice/userSlice.ts";
import {postAction} from "../../redux/slices/postsSlice/postSlice.ts";
import {avatarColors} from "../../constans/avatarsColor.ts";


export const SingleUserComponent = () => {
    const {id} = useParams();
    const {user, loadState, error} = useAppSelector(state => state.users);
    const posts = useAppSelector(state => state.posts.posts)
    const userPosts = posts.filter(post => post.userId === user?.id)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (id) dispatch(userActions.loadUser(id))
    }, [id]);

    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, []);
    if (!user) {
        return <div className="p-8 text-center text-gray-500">Loading user data...</div>;
    }

    const {bg, text} = avatarColors[user.id % avatarColors.length] ?? {bg: "bg-gray-100", text: "text-gray-600"};

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
                user &&
                <div className='max-w-6xl mx-auto px-4 py-8
                grid
                grid-cols-1
                md:grid-cols-3
                gap-8'>
                    <div
                        className='md:col-span-1 h-fit bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-6'>
                        <div className='flex flex-col items-center text-center'>
                            <div className={`h-24 w-24 flex items-center justify-center rounded-full text-3xl font-bold ${bg} ${text}`}>{user.name[0].toUpperCase()}</div>
                            <h1 className='text-2xl font-bold text-gray-900'>{user.name}</h1>
                            <span className='text-base text-gray-500 font-medium'>{user.username}</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-lg font-bold text-gray-700'>User Info:</h3>
                            <div className='flex flex-col'>
                                <span className='text-xs text-gray-400 font-medium'>Email</span>
                                <span className='text-sm text-gray-900 font-medium'>{user.email}</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-xs text-gray-400 font-medium'>Phone</span>
                                <span className='text-sm text-gray-900 font-medium'>{user.phone}</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-xs text-gray-400 font-medium'>Website</span>
                                <span className='text-sm text-gray-900 font-medium hover:cursor-pointer hover:text-blue-700'>{user.website}</span>
                            </div>
                            <div className='px-3 border-l-2 border-gray-100 pl-3 pt-1 flex flex-col gap-1'>
                                <h4 className='text-base font-bold text-gray-700 '>Address</h4>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-gray-400 font-medium'>City</span>
                                    <span className='text-sm text-gray-900 font-medium'>{user.address.city}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-gray-400 font-medium'>Street</span>
                                    <span className='text-sm text-gray-900 font-medium'>{user.address.street}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-gray-400 font-medium'>Suite</span>
                                    <span className='text-sm text-gray-900 font-medium'>{user.address.suite}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-gray-400 font-medium'>Zipcode</span>
                                    <span className='text-sm text-gray-900 font-medium'>{user.address.zipcode}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1'>Company
                                info</h3>
                            <div className='flex flex-col'>
                                <span className='text-sm font-semibold text-gray-500'>Name</span>
                                <span className='text-sm text-gray-900 font-medium'>{user.company.name}</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-sm font-semibold text-gray-500'>BS</span>
                                <span className='text-sm text-gray-900 font-medium'>{user.company.bs}</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-sm font-semibold text-gray-500'>Catch Phrase</span>
                                <span className='text-sm text-gray-900 font-medium'>{user.company.catchPhrase}</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-2 flex flex-col gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm'>
                        <h2 className='text-xl font-bold text-gray-900 mb-4'>Latest {user.name}'s Posts</h2>
                        {
                        user && userPosts.map(post => <div key={post.id}>
                            <div className='bg-white p-5 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors flex flex-col gap-3'>
                                <h4 className='font-semibold text-gray-900 text-lg mb-2 capitalize'>{post.title}</h4>
                                <p className='line-clamp-2 overflow-hidden text-ellipsis'>{post.body[0].toUpperCase() + post.body.slice(1)}</p>
                                <div className='flex justify-end'>
                                    <button onClick={() => navigate(`/posts/${post.id}`)}
                                            className="px-3 py-1 w-24 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">View
                                        post
                                    </button>
                                </div>

                            </div>
                        </div>)
                    }
                    </div>

                </div>
            }

        </>
    )
}