import {MenuComponent} from "../components/menu-component/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};