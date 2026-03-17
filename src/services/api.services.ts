import type {IPost} from "../models/IPost.ts";

const getPosts = async (): Promise<IPost[]> => {
    return await fetch(import.meta.env.VITE_API_BASE_URL + '/posts')
        .then(res => res.json())
}




export {
    getPosts
}