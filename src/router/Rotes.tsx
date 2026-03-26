import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {HomePage} from "../pages/home-page/HomePage.tsx";
import {UsersPage} from "../pages/users-pages/UsersPage.tsx";
import {UsersJsonplaceholderPage} from "../pages/users-pages/UsersJsonplaceholderPage.tsx";
import {UsersDummyjsonPage} from "../pages/users-pages/UsersDummyjsonPage.tsx";
import {PostsPage} from "../pages/posts-pages/PostsPage.tsx";
import {PostsJsonplaceholderPage} from "../pages/posts-pages/PostsJsonplaceholderPage.tsx";
import {PostsDummyjsonPage} from "../pages/posts-pages/PostsDummyjsonPage.tsx";
import {CommentPage} from "../pages/comments-pages/CommentPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>, children: [
                    {path: 'jsonplaceholder', element: <UsersJsonplaceholderPage/>},
                    {path: 'dummyjson', element: <UsersDummyjsonPage/>},
                ]},

            {path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <PostsJsonplaceholderPage/>},
                    {path: 'dummyjson', element: <PostsDummyjsonPage/>}
                ]},

            {path: 'comments/jsonplaceholder', element: <CommentPage/>},
        ]
    }
])