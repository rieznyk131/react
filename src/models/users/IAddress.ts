import type {Geo} from "./IGeo.ts";

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}