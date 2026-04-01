import {UsersComponent} from "../components/users/users-component/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <div className='flex flex-row m-10 gap-50'>
            <UsersComponent/>
            <hr/>
            <Outlet/>

        </div>
    );
};