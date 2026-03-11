import type {IProduct} from "../../models/IProduct.ts";
import type {FC} from "react";
import './myProduct.css'

type MyPropsType = {
    product: IProduct;
}

const MyProduct: FC<MyPropsType> = ({product}) => {
    return (

            <div className={'product-item'}>
                <h2>{product.title}. {product.price} UAH</h2>
                <img src={product.image} alt={product.title}/>
            </div>
    )
}

export default MyProduct;