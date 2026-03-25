import type {FC} from "react";
import type {IPost} from "../../models/posts/IPost.ts";

type PostPropsType = {
    item: IPost;
}

export const PostComponent: FC<PostPropsType> = ({item}) => {
    return (
        <div className='mb-5 ml-5 border-1 w-100 h-50 p-2'>
            <p>{item.title}</p>
            <p>User: {item.userId}</p>
            <p>{item.body}</p>
        </div>
    );
};