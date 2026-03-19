import type {IProductModel} from "./IProductModel.ts";

export interface ProductsDummyJsonModel {
    products: IProductModel[];
    total: number,
    skip: number,
    limit: number
}