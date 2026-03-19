 import type {IPosts} from "../../models/IPostModel.ts";
import type {FC} from "react";
import './post-component-style.css'

type PostPropsType = {
    item: IPosts;
}

export const PostComponent: FC<PostPropsType> = ({item}) => {
    return (
        <div className={'post-container'}>
            <div className={'img-container'}>
                <img src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={item.title}/>
            </div>
            <div className={'text-content'}>
            <div className={'tags'}>
                <ul>
                    {
                        item.tags.map((tag, index: number) => <li key={index}><a href={'#'}>{tag}</a></li>)
                    }
                </ul>
            </div>

                <div className={'post-content'}>
                    <p className='text-2xl font-semibold hover:underline'><a href="#">{item.title}</a></p>
                    <p className='author'>By <a href="#" className='font-bold hover:underline '>UserID {item.userId}</a> </p>
                    <p>{item.body}</p>
                </div>

                <div className={'reactions'}>
                    <ul>
                        <li className='likes hover:cursor-pointer'> {item.reactions.likes}</li>
                        <li className='dislikes hover:cursor-pointer'> {item.reactions.dislikes}</li>
                        <li className='views'> {item.views}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};