import {PostComponent} from "../post-component/PostComponent.tsx";
import type {IPosts} from "../../models/IPostModel.ts";
import {getPosts} from "../../services/api.service.ts";
import './posts-component-styles.css'
import {useEffect, useState} from "react";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    useEffect(() => {
        getPosts().then(posts => setPosts(posts));
    },[])
    return (
        <div className={'posts-container'}>
            {
                posts.map(post => <PostComponent key={post.id} item={post}/>)
            }
        </div>
    );
};