import type {FC} from "react";
import type {IComment} from "../../models/commnets/IComment.ts";
import {Link} from "react-router-dom";
import {avatarColors} from "../../constans/avatarsColor.ts";

type CommentProps = {
    comment: IComment
}

export const CommentComponent: FC<CommentProps> = ({comment}) => {
    const {bg, text} = avatarColors[comment.id % avatarColors.length];
    return (
        <article className='bg-white h-fit w-200 p-6 rounded-xl border border-gray-100 flex  gap-3'>
            <header className='flex flex-col gap-2 w-[16rem]'>
                <span
                    className='text-xs font-semibold text-blue-600 uppercase tracking-wider'>Comment #{comment.id}</span>

                    <div
                        className={`h-12 w-12 flex items-center justify-center rounded-full font-bold ${bg} ${text} `}>{comment.email[0].toUpperCase()}</div>
                    <p className='font-bold text-gray-600 text-sm break-all'>{comment.email}</p>
            </header>
            <div className='border-r-[1px] border-r-gray-300'></div>
            <div className='flex flex-col gap-2 w-164'>
                <p className='hover:text-blue-700 line-clamp-3  text-base font-bold text-gray-900'>
                    <Link
                        to={`/comments/${comment.id}`}>{comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}</Link>
                </p>
                <p>{comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}</p>
            </div>
        </article>
    );
};