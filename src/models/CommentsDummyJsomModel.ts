import type {ICommentModel} from "./ICommentModel.ts";

export interface CommentsDummyJsomModel {
    comments: ICommentModel[];
    total: number,
    skip: number,
    limit:number
}