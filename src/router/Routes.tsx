import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {PostPage} from "../pages/PostPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {CommentPage} from "../pages/CommentPage.tsx";

export const routes = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path:'users', element:<UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path:'posts', element:<PostsPage/>},
            {path: 'posts/:id', element: <PostPage/>},
            { path: 'comments', element: <CommentsPage/>},
            { path: 'comments/:id', element: <CommentPage/>}
        ]
    }

])