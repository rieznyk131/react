import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/menu-component/MenuComponent.tsx";

export const MainLayout = () => {
    return (
        <>
            <MenuComponent/>
            <hr/>
        <Outlet/>
        </>
    );
};