import type {ICommentModel} from "../../models/ICommentModel.ts";
import type {FC} from "react";
import './comment-component-style.css'

type CommentPropsType = {
    item: ICommentModel
}

export const CommentComponent: FC<CommentPropsType> = ({item}) => {
    return (
        <div className={'comment-container'}>
            <div className={'text-container'}>
                <p className='text-xl font-semibold'>{item.user.fullName}</p>
                <p className='italic pb-1'>Username: {item.user.username}</p>
                <p>{item.body}</p>
            </div>
            <div className={'likes'}>
                <img className='hover:cursor-pointer' src="https://img.icons8.com/?size=25&id=2VPMLRU1s9HT&format=png&color=000000" alt='like icon for a comment'/>
                <p className='font-semibold'>{item.likes}</p>
            </div>
        </div>
    );
};