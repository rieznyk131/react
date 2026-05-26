import {MenuComponent} from "../components/menu/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className='bg-gray-50 min-h-screen'>
            <MenuComponent/>

            <Outlet/>
        </div>
    );
};