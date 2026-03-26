import {PostsComponent} from "../../components/posts/PostsComponent.tsx";
import {Outlet} from "react-router-dom";

export const PostsPage = () => {
    return (
        <>
            <PostsComponent/>
            <Outlet/>
        </>
    );
};