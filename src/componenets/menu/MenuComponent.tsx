import {NavLink} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div className="w-full h-12 bg-taupe-50">
            <ul className='w-full h-full flex items-center justify-center gap-10'>
                <li><NavLink to={''}
                             className={({ isActive }) =>
                                 isActive
                                     ? "text-gray-400 pointer-events-none"
                                     : "text-black"
                             }
                >Home</NavLink>
                </li>
                <li><NavLink to={'login'}
                             className={({ isActive }) =>
                                 isActive
                                     ? "text-gray-400 pointer-events-none"
                                     : "text-black"
                             }
                >Login</NavLink>
                </li>
                <li><NavLink to={'/auth/resources'}
                             className={({ isActive }) =>
                                 isActive
                                     ? "text-gray-400 pointer-events-none"
                                     : "text-black"
                             }
                >Resources</NavLink>
                </li>
            </ul>
        </div>
    );
};