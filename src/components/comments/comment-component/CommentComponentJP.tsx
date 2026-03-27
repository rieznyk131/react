import type {ICommentJP} from "../../../models/JsonPlaceholder/ICommentsJP.ts";
import type {FC} from "react";
import './comment-component-jp-style.css'

type CommentPropsJP = {
    item: ICommentJP
}
export const CommentComponentJP: FC<CommentPropsJP> = ({item}) => {
    return (
        <div className="comment-container-jp">
            <h3 className='text-xl font-semibold'>{item.name}</h3>
            <p className='italic text-s'>{item.email}</p>
            <p>{item.body}</p>
        </div>
    );
};