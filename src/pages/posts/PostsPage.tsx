import {Link} from "react-router-dom";
import './posts-page-style.css'

export const PostsPage = () => {
    return (
        <>
            <div className='w-full h-60 flex justify-center items-center gap-40 mt-10'>
                <button><Link to={'jsonplaceholder'}>Go to JSONPlaceholder Posts</Link></button>
                <button><Link to={'dummyjson'}>Go to DummyJSON Posts</Link></button>
            </div>
        </>
    );
};