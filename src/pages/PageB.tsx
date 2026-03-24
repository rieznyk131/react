import {Link} from 'react-router-dom';
import {Outlet} from "react-router-dom";

export const PageB = () => {
    return (
        <div className="w-full h-full flex justify-center items-center flex-col">
            <div className='bg-blue-500 h-70 w-80 flex justify-center items-center text-xl mt-5'>Page B</div>
            <ul className='bg-blue-300 h-10 w-80 flex flex-row gap-10 justify-center items-center'>
                <li>
                    <Link to={'1'}>1</Link>
                </li>
                <li>
                    <Link to={'2'}>2</Link>
                </li>
                <li>
                    <Link to={'3'}>3</Link>
                </li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};