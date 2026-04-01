import type {FC} from "react";
import type {ICart} from "../../../models/ICart.ts";
import type {IProduct} from "../../../models/IProduct.ts";
import {ProductComponent} from "../../products/product-component/ProductComponent.tsx";

type CartProps = {
    item: ICart
}

export const CartComponent: FC<CartProps> = ({item}) => {
    return (
        <div className='mb-10'>
            <p className='mb-6'>Cart ID: {item.id}</p>
            <div>
                {
                    item.products.map((product: IProduct) => <ProductComponent product={product} key={product.id}/>)
                }
            </div>
            <hr/>
            <div className='flex flex-col items-end mt-5'>
                <p>Total products: {item.totalProducts}</p>
                <p>Total Quantity: {item.totalQuantity}</p>
                <p>Discounted Total: {item.discountedTotal}%</p>
                <p>Total: ${item.total}</p>
            </div>
        </div>
    );
};