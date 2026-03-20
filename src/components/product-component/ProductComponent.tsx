import type {IProductModel} from "../../models/IProductModel.ts";
import type {FC} from "react";
import './product-component-style.css'
import {ReviewComponent} from "../review-component/ReviewComponent.tsx";
import {RatingComponent} from "../rating-component/RatingComponent.tsx";
import {Tabs} from "../tabs-component/TabsComponent.tsx";

type ProductPropsType = {
    item: IProductModel
}


export const ProductComponent: FC<ProductPropsType> = ({item}) => {
    return (
        <div className={'product-container'}>

            <div className='flex gap-8'>
                <div className={'product-image'}>
                    <img src={item.images[0]} alt={item.title}/>
                </div>

                <div className='flex flex-col gap-7'>
                    <div>
                        <div>
                            <h3 className='text-2xl font-semibold'>{item.title}</h3>
                            <a className='mt-2' href="#">{item.category}</a>
                        </div>
                        <div className={'product-rating'}>
                            <p className='text-xs pt-1'>{item.rating}</p>
                            <RatingComponent rating={item.rating}/>
                            <a className='text-xs pt-1' href='#product-review'>({item.reviews.length})</a>
                        </div>
                    </div>
                    <div className={'price-discount-availability'}>
                        <p>Price: $ {item.price}</p>
                        <p>Discount: {item.discountPercentage}%</p>
                        <p>Availability: {item.availabilityStatus}</p>
                    </div>
                </div>
            </div>

            <div className={'product-data'}>
                <hr className='text-gray-300'/>

                <h3 className='text-xl font-semibold'>Product description</h3>
                <p>{item.description}</p>
                <Tabs item={item}/>
                <div id={'product-review'}>
                    <h3 className='text-xl font-semibold'>Customers Review</h3>
                    <div className={'review-component'}>
                        {
                            item.reviews.map((value, index) => <ReviewComponent review={value} key={index}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};