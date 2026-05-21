import type {FC} from "react";
import type {IComment} from "../../models/commnets/IComment.ts";
import {Link} from "react-router-dom";

type CommentProps = {
    comment: IComment
}

export const CommentComponent: FC<CommentProps> = ({comment}) => {
    return (
        <div className='m-5'>
            <p>Comment ID: {comment.id}</p>
            <p>Author: {comment.email}</p>
            <p>Title: <Link to={`/comments/${comment.id}`}>{comment.name}</Link></p>
            <p>Body: {comment.body}</p>
        </div>
    );
};