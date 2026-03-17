import {ToDoComponent} from "../todo-component/ToDoCompoment.tsx";
import {getToDos} from "../../services/api.services.ts";
import type {IToDo} from "../../models/IToDo.ts";
import {useEffect, useState} from "react";
import './todos-component-style.css'

export const ToDosComponent = () => {
    const [todos, setTodos] = useState<IToDo[]>([]);
    useEffect(() => {
        getToDos().then(response => setTodos(response))
    }, []);

    return (
        <div className={'items-container'}>
            {
                todos.map(todo => <ToDoComponent key={todo.id} item={todo}/>)
            }
        </div>
    );
};