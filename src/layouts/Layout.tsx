import {MenuComponent} from "../components/menu/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className='bg-gray-50'>
            <MenuComponent/>

            <Outlet/>
        </div>
    );
};