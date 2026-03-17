import type {IToDo} from "../models/IToDo.ts";
import type {IToDosDummyJsonModel} from "../models/ToDosDummyJsonModel.ts";

export const getToDos= async(): Promise<IToDo[]> => {
    const response: IToDosDummyJsonModel = await fetch(import.meta.env.VITE_API_BASE_URL + '/todo')
    .then(res => res.json())
    return  response.todos
}