import type {IPosts} from "./IPostModel.ts";

export interface IPostsDummyJsonModel {
    posts: IPosts [],
    total: number,
    skip: number,
    limit: number
}