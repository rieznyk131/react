import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";
import './post-component-style.css'

type PostPropsType = {
    item: IPost
}

const PostComponent: FC<PostPropsType> = ({item}) => {
    return (
        <div className={'item-container'}>
            <h3 className={'text-xl font-semibold'}>{item.title}</h3>
            <p>{item.body}</p>
        </div>
    )
}

export {
    PostComponent
}