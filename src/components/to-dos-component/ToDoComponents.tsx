import {ToDoComponent} from '../to-do-component/ToDoComponent.tsx'
import type {IToDo} from "../models/IToDo.ts";
import {getToDo} from "../services/api.services.ts";
import {useEffect, useState} from "react";
import './to-do-components-style.css'

const ToDoComponents = () => {
    const [toDos, setToDo] = useState<IToDo[]>([]);
   useEffect(() =>{
       getToDo()
           .then(response => setToDo(response))
   }, [])
    return (
        <div className={'items-container'}>
            {
                toDos.map((toDo: IToDo) => <ToDoComponent key={toDo.id} item={toDo} />)
            }
        </div>
    )
}

export {
    ToDoComponents
}