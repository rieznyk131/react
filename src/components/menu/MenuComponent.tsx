import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div className="w-full h-10">
            <ul className="w-full h-full flex justify-center items-center gap-10">
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'/'}>Main Layout</Link></li>
            </ul>
        </div>
    );
};