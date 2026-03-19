import type {ICommentModel} from "../../models/ICommentModel.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";
import {getComments} from "../../services/api.service.ts";
import {useEffect, useState} from "react";
import './comments-component-style.css'

export const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);
    useEffect(() => {
        getComments().then(comments => setComments(comments));
    },[])
    return (
        <div className={'comments-container'}>

            {
                comments.map(comment => <CommentComponent item={comment} key={comment.id}/>)
            }

        </div>
    );
};