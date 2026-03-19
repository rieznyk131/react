import type {IProductModel} from "../../models/IProductModel.ts";
import type {FC} from "react";
import './product-component-style.css'
import {ReviewComponent} from "../review-component/ReviewComponent.tsx";

type ProductPropsType = {
    item: IProductModel
}


export const ProductComponent: FC <ProductPropsType> = ({item}) => {
    return (
        <div className={'product-container'}>

            <div className={'product-image'}>
                <img src={item.images[0]} alt={item.title}/>
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <div className={'product-review'}>
            {
                item.reviews.map((value, index) => <ReviewComponent review={value} key={index}/>)
            }
            </div>
        </div>
    );
};