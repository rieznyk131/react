import type {IToDo} from "./IToDo.ts";

export interface IToDosDummyJsonModel {
    todos: IToDo[],
    total: number,
    skip: number,
    limit: number
}