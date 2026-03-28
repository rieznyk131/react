import {useEffect, useState} from "react";
import type {IPostDJ} from "../../../models/DummyJson/IPostDJ.ts";
import {postsService} from "../../../services/posts.api.services.ts";
import {PostComponentDJ} from "../post-component/PostComponentDJ.tsx";
import './posts-component-dj-style.css'

export const PostsComponentDJ = () => {
    const [posts, setPosts] = useState<IPostDJ[]>([]);
    useEffect(() => {
        postsService.getPostsDJ().then((allPosts)=> setPosts(allPosts));
    },[])
    return (
        <div className='m-10'>
            <h1 className='m-10 text-center text-2xl text-[#e6b3ec]'>DummyJSON Posts</h1>

            <div className={'posts-container-dj'}>
                {posts.map((post) => <PostComponentDJ key={post.id} item={post}/>)}
            </div>
        </div>
    );
};