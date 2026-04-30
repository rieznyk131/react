import {Outlet} from "react-router-dom";
import {MenuComponent} from "../componenets/menu/MenuComponent.tsx";

export const MainLayout = () => {
    return (
        <>
        <MenuComponent/>
            {/*компонент меню*/}
            <hr/>
            <Outlet/>
            {/*додаємо Outlet через котрий будуть рендеритись дочірні елементи*/}
        </>
    );
};