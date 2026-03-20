import type {IProductModel} from "../../models/IProductModel.ts";
import {getProducts} from "../../services/api.service.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";
import {useEffect, useState} from "react";
import './products-component-style.css'

export const ProductsComponent = () => {
    const [products, setProducts] = useState<IProductModel[]>([]);
    useEffect(() => {
        getProducts().then(products => setProducts(products));
    }, [])
    return (
        <div className={'products-container'}>
            {
                products.map(product => <ProductComponent item={product} key={product.id}/>)
            }
        </div>
    );
};