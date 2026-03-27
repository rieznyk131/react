import {Link} from "react-router-dom";
import './users-page-style.css'

export const UsersPage = () => {
    return (
            <div className='w-full h-60 flex justify-center items-center gap-40 mt-10'>
                <button><Link to={'jsonplaceholder'}>Go to JSONPlaceholder Users</Link></button>
                <button><Link to={'dummyjson'}>Go to DummyJSON Users</Link></button>
            </div>
    );
};