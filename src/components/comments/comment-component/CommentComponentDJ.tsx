import type {FC} from "react";
import type {ICommentDJ} from "../../../models/DummyJson/ICommentDJ.ts";
import './comment-component-dj.css'


type CommentPropsDJ = {
    item: ICommentDJ
}
export const CommentComponentDJ: FC<CommentPropsDJ> = ({item}) => {
    return (
        <div className={'comment-container-dj'}>
            <div className={'text-container'}>
                <p className='text-xl font-semibold'>{item.user.fullName}</p>
                <p className='italic pb-1'>Username: {item.user.username}</p>
                <p>{item.body}</p>
            </div>
            <div className={'likes-dj'}>
                <img className='hover:cursor-pointer' src="https://img.icons8.com/?size=25&id=2VPMLRU1s9HT&format=png&color=000000" alt='like icon for a comment'/>
                <p className='font-semibold'>{item.likes}</p>
            </div>
        </div>
    );
};