import type {IProductModel} from "../models/IProductModel.ts";
import type {ProductsDummyJsonModel} from "../models/ProductsDummyJsonModel.ts";

export const getProducts = async (): Promise<IProductModel[]> => {
    const response: ProductsDummyJsonModel = await fetch(import.meta.env.VITE_API_BASE_URL + './products')
        .then((res) => res.json());

    return response.products
}