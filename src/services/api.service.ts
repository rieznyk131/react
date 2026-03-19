import type {ICommentModel} from "../models/ICommentModel.ts";
import type {CommentsDummyJsomModel} from "../models/CommentsDummyJsomModel.ts";

export const getComments = async(): Promise<ICommentModel[]> => {
     const response: CommentsDummyJsomModel = await fetch(import.meta.env.VITE_API_BASE_URL + '/comments')
         .then(res => res.json());

     return response.comments
}