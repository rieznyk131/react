import type {IUser} from "./IUser.ts";

export interface IBaseResponse {
    users: IUser[]
    total: number;
    skip: number;
    limit: number;
}