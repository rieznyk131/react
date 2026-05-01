import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type ProductProps = {
    product: IProduct
}

export const ProductComponent: FC<ProductProps> = ({product}) => {
    return (
        <div className='w-72 h-58 border border-gray-300 rounded-2xl flex flex-col justify-center gap-2 items-center'>
            <div>
                <img className='w-36' src={product.thumbnail} alt={product.title}/>
            </div>
        <p className='font-bold text-center'>{product.title}</p>
            <p>$ {product.price}</p>
        </div>
    );
};