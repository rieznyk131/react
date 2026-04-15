import {Outlet} from "react-router-dom";
import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";

export const MainLayout = () => {
    return (
        <div className="m-12 flex flex-col gap-5">
       <Outlet/>
            <PaginationComponent/>
        </div>
    );
};