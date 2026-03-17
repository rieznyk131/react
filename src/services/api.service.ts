import type {IComment} from "../models/IComment.ts";

const getComments = async(): Promise<IComment[]> => {
    return await fetch(import.meta.env.VITE_API_BASE_URL + '/comments')
    .then((res) => res.json())
}

export {
    getComments
}