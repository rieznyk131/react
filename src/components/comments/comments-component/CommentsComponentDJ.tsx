import {useEffect, useState} from "react";
import type {ICommentDJ} from "../../../models/DummyJson/ICommentDJ.ts";
import {commentsService} from "../../../services/api.services.ts";
import {CommentComponentDJ} from "../comment-component/CommentComponentDJ.tsx";
import './comment-component-dj-style.css'

export const CommentsComponentDJ = () => {
   const [comments, setComments] = useState<ICommentDJ[]>([]);
   useEffect(() => {
       commentsService.getCommentDJ().then((allComments) => setComments(allComments));
   },[])
    return (
        <div className='m-10'>
            <h1 className='m-10 text-center text-2xl text-[#e6b3ec]'>DummyJSON Comments</h1>
            <div className={'comments-container-dj'}>
                {
                    comments.map(comment => <CommentComponentDJ item={comment} key={comment.id}/>)
                }
            </div>
        </div>
    );
};