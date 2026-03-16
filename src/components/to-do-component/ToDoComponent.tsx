import type {IToDo} from "../models/IToDo.ts";
import type {FC} from "react";
import './to-do-component-style.css'

type ToDoPropsType = {
    item: IToDo
}

const ToDoComponent: FC<ToDoPropsType> = ({item}) => {
    return (
        <div className={'item-container'}>
            <p>userId: {item.userId}</p>
            <p>id: {item.id}</p>
            <p>title: {item.title}</p>
            <p>completed: {String(item.completed)}</p>
        </div>
    )
}

export {
    ToDoComponent
}