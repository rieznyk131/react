import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>}
        ]
    }

])