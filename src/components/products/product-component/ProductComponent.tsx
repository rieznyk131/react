import type {FC} from "react";
import type {IProduct} from "../../../models/IProduct.ts";
import './product-component-style.css'

type ProductProps = {
    product: IProduct;
}

export const ProductComponent: FC<ProductProps> = ({product}) => {
    return (
        <div className={'product-container'}>
            <div className={'product-title-img'}>
                <img src={product.thumbnail} alt={product.title}/>
                <p className='mt-10'>{product.title}</p>
            </div>
            <p className='mt-10'>Price: ${product.price}</p>
            <p className='mt-10'>Quantity: {product.quantity}</p>
            <div className={'product-discount'}>
                <p className='mt-10'>Discount Percentage: {product.discountPercentage}%</p>
                <p>Discounted Total: ${product.discountedTotal}</p>
                <p className='mt-5'> Total: ${product.total}</p>
            </div>
        </div>
    );
};