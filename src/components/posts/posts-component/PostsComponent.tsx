import {useEffect, useState} from "react";
import type {IPost} from "../../../models/IPost.ts";
import {getAll} from "../../../services/general.api.service.ts";
import type {IBaseResponseModel} from "../../../models/IBaseResponseModel.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";
import './posts-component-style.css'

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & {posts: IPost[]}>('/posts').then(({posts}) => setPosts(posts))
    }, [])
    return (
        <div className='m-10'>
            <h1 className='m-10 text-center text-2xl text-[#e6b3ec]'>DummyJSON Posts</h1>

            <div className={'posts-container'}>
                {posts.map((post) => <PostComponent key={post.id} item={post}/>)}
            </div>
        </div>
    );
};