import {MenuComponent} from "../components/menu/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
        <MenuComponent/>
            <hr className="text-[#e6b3ec]"/>
        <Outlet/>
        </>
    );
};