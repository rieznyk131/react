import type {IProductModel} from "../../models/IProductModel.ts";
import {getProducts} from "../../services/api.service.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";
import {useEffect, useState} from "react";

export const ProductsComponent = () => {
    const [products, setProducts] = useState<IProductModel[]>([]);
    useEffect(() => {
        getProducts().then(products => setProducts(products));
    }, [])
    return (
        <div>
            {
                products.map(product => <ProductComponent item={product} key={product.id}/>)
            }
        </div>
    );
};