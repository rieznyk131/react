import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/menu-component/MenuComponent.tsx";

export const MainLayout = () => {
    return (
        <div className="bg-indigo-200 h-full">
            <MenuComponent/>
            <hr/>
        <Outlet/>
        </div>
    );
};