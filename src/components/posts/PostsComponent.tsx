import {useEffect, useState} from "react";
import type {IPost} from "../../models/posts/IPost.ts";
import {postService} from "../../services/api.services.ts";
import {PostComponent} from "../post/PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getPosts().then((allPosts) => {
            setPosts(allPosts)
        });
    },[])
    return (
        <div className='mt-6 grid grid-cols-3 gap-4 w-full justify-items-center'>
            {
                posts.map((post) => <PostComponent key={post.id} item={post} />)
            }
        </div>
    );
};