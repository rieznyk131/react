import {PostComponent} from '../post-component/PostComponent.tsx'
import type {IPost} from "../../models/IPost.ts";
import {getPosts} from "../../services/api.services.ts";
import {useEffect, useState} from "react";
import './posts-component-style.css'

const PostsComponent = () => {
    const [posts, setPost] = useState<IPost[]>([]);
   useEffect(() =>{
       getPosts()
           .then(response => setPost(response))
   }, [])
    return (
        <div className={'items-container'}>
            {
                posts.map((post: IPost) => <PostComponent key={post.id} item={post} />)
            }
        </div>
    )
}

export {
    PostsComponent
}