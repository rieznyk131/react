import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div className="w-full h-15 ">
            <ul className='flex gap-5 justify-center items-center h-full'>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
                <li><Link to={'products'}>Products</Link></li>
            </ul>
        </div>
    );
};