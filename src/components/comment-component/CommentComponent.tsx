import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";
import './comment-component-style.css'

type CommentPropsType = {
    item: IComment
}

const CommentComponent: FC<CommentPropsType> = ({item}) => {
    return (
        <div className="comment-container">
           <h3 className='text-xl font-semibold'>{item.name}</h3>
            <p className='italic text-s'>{item.email}</p>
            <p>{item.body}</p>
        </div>
    )
}

export default CommentComponent