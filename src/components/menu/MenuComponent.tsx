import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div>
            <ul className='flex justify-center items-center gap-5 w-full h-10 text-[#e6b3ec]'>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
            </ul>
        </div>
    );
};