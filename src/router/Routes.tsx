import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {UsersPage} from "../pages/users/UsersPage.tsx";
import {UsersJsonPlaceholderPage} from "../pages/users/UsersJsonPlaceholderPage.tsx";
import {UsersDummyJsonPage} from "../pages/users/UsersDummyJsonPage.tsx";
import {PostsPage} from "../pages/posts/PostsPage.tsx";
import {PostsJsonPlaceholderPage} from "../pages/posts/PostsJsonPlaceholderPage.tsx";
import {PostsDummyJsonPage} from "../pages/posts/PostsDummyJsonPage.tsx";
import {CommentsPage} from "../pages/comments/CommentsPage.tsx";
import {CommentsJsonPlaceholderPage} from "../pages/comments/CommentsJsonPlaceholderPage.tsx";
import {CommentsDummyJsonPage} from "../pages/comments/CommentsDummyJsonPage.tsx";

export const routes = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/jsonplaceholder', element: <UsersJsonPlaceholderPage/>},
            {path: 'users/dummyjson', element: <UsersDummyJsonPage/>},
            {path:'posts', element: <PostsPage/>},
            {path: 'posts/jsonplaceholder', element: <PostsJsonPlaceholderPage/>},
            {path: 'posts/dummyjson', element: <PostsDummyJsonPage/> },
            {path: 'comments', element: <CommentsPage/>},
            {path: 'comments/jsonplaceholder', element: <CommentsJsonPlaceholderPage/>},
            {path: 'comments/dummyjson', element: <CommentsDummyJsonPage/>}
        ]}
])