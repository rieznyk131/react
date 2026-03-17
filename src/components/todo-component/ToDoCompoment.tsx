import type {IToDo} from "../../models/IToDo.ts";
import type {FC} from "react";
import './todo-component-styles.css'

type ToDoPropsType = {
    item: IToDo
}

export const ToDoComponent: FC<ToDoPropsType> = ({item}) => {
    return (
        <div className={'item-container'}>
            <p>User ID: {item.userId}</p>
            <p>To-do: {item.todo}</p>
            <p>Completed: {String(item.completed)}</p>
        </div>
    )
}