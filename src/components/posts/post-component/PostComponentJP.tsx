import type {IPostJP} from "../../../models/JsonPlaceholder/IPostsJP.ts";
import type {FC} from "react";
import './post-component-jp-style.css'

type PostPropsJP = {
    item: IPostJP
}
export const PostComponentJP: FC<PostPropsJP> = ({item}) => {
    return (
        <div>
            <div className={'item-container-jp'}>
                <h3 className={'text-xl font-semibold'}>{item.title}</h3>
                <p>{item.body}</p>
            </div>
        </div>
    );
};