import {Link} from "react-router-dom";

export const PostsComponent = () => {
    return (
        <div className='w-full h-60 flex justify-center items-center gap-40 mt-10'>
            <button  className='w-auto h-10 p-2 border border-gray-300 rounded-lg bg-gray-200 shadow-inner shadow-gray-300/80 cursor-pointer'><Link to={'jsonplaceholder'}>Go to JSONPlaceholder Posts</Link></button>
            <button className='w-auto h-10 p-2 border border-gray-300 rounded-lg bg-gray-200 shadow-inner shadow-gray-300/80 cursor-pointer'><Link to={'dummyjson'}>Go to DummyJSON Posts</Link></button>
        </div>
    );
};