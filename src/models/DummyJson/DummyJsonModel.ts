import type {IUserDJ} from "./IUserDJ.ts";
import type {IPostDJ} from "./IPostDJ.ts";
import type {ICommentDJ} from "./ICommentDJ.ts";

export interface UsersDummyJsonModel {
    users: IUserDJ[],
    total: number,
    skip: number,
    limit: number
}

export interface PostsDummyJsonModel {
    posts: IPostDJ[],
    total: number,
    skip: number,
    limit: number
}

export interface CommentsDummyJsonModel {
    comments: ICommentDJ[],
    total: number,
    skip: number,
    limit: number
}