import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div>
            <ul className="flex w-full h-15 gap-10 justify-center items-center text-[#e6b3ec]">
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
            </ul>
        </div>
    );
};