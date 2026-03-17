import CommentComponent from '../comment-component/CommentComponent.tsx'
import {getComments} from "../../services/api.service.ts";
import type {IComment} from "../../models/IComment.ts";
import './comments-component-style.css'
import {useEffect, useState} from "react";

export const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getComments().then(value => setComments(value));
    }, []);

    return (
        <div className="comments-container">
            {
                comments.map(comment => <CommentComponent item={comment} key={comment.id} />)
            }
        </div>
    )
}