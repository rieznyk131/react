import {Link} from "react-router-dom";
import './comment-page-style.css'

export const CommentsPage = () => {
    return (
        <>
            <div className='w-full h-60 flex justify-center items-center gap-40 mt-10'>
                <button><Link to={'jsonplaceholder'}>Go to JSONPlaceholder Comments</Link></button>
                <button><Link to={'dummyjson'}>Go to DummyJSON Comments</Link></button>
            </div>
        </>
    );
};