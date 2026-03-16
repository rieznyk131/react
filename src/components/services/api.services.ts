import type {IToDo} from "../models/IToDo.ts";

const getToDo = async (): Promise<IToDo[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(res => res.json())
}

export {
    getToDo
}