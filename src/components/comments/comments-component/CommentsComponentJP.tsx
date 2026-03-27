import {useEffect, useState} from "react";
import {commentsService} from "../../../services/api.services.ts";
import type {ICommentJP} from "../../../models/JsonPlaceholder/ICommentsJP.ts";
import {CommentComponentJP} from "../comment-component/CommentComponentJP.tsx";
import './comments-component-jp-style.css'

export const CommentsComponentJP = () => {
   const [comments, setComments] = useState<ICommentJP[]>([]);
   useEffect(() => {
       commentsService.getCommentsJP().then((allComments) => setComments(allComments))
   },[])
    return (
        <div className='m-10'>
            <h1 className='m-10 text-center text-2xl text-[#e6b3ec]'>JSONPlaceholder Comments</h1>
            <div className="comments-container-jp">
                {
                    comments.map(comment => <CommentComponentJP item={comment} key={comment.id}/>)
                }
            </div>
        </div>
    );
};