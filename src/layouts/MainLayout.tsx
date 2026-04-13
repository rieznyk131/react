import {Outlet} from "react-router-dom";
import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";

export const MainLayout = () => {
    return (
        <>
       <Outlet/>
            <PaginationComponent/>
            <p>Main Page</p>
        </>
    );
};