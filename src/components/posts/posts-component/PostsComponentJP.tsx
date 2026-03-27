import {useEffect, useState} from "react";
import type {IPostJP} from "../../../models/JsonPlaceholder/IPostsJP.ts";
import {postsService} from "../../../services/api.services.ts";
import {PostComponentJP} from "../post-component/PostComponentJP.tsx";
import './posts-component-jp-style.css'

export const PostsComponentJP = () => {
    const [posts, setPosts] = useState<IPostJP[]>([]);
    useEffect(() => {
        postsService.getPostsJP().then((allPosts) => setPosts(allPosts));
    },[])
    return (
        <div className='m-10'>
            <h1 className='m-10 text-center text-2xl text-[#e6b3ec]'>JSONPlaceholder Posts</h1>
            <div className={'items-container-jp'}>
                {
                    posts.map(post => <PostComponentJP item={post} key={post.id}/>)
                }
            </div>
        </div>
    );
};