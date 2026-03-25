import type {Address} from "./IAddress.ts";
import type {Company} from "./ICompany.ts";

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}






