import {MenuComponent} from "../components/menu/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
        <MenuComponent/>
            <hr className="text-[#e6b3ec]" />
         <Outlet/>
        </>
    );
};