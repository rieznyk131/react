//типізуємо дані об'єкту, що приходять при запиті на URL /auth/products

import type {IProduct} from "./IProduct.ts";

export interface IBaseResponseModel {
    products: IProduct[],
    total: number,
    skip: number,
    limit: number
}