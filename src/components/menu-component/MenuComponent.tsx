import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div className="w-full">
            <ul className='flex justify-center items-center gap-4 w-full h-10'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/a'}>Page A</Link></li>
                <li><Link to={'/b'}>Page B</Link></li>
            </ul>
        </div>
    );
};