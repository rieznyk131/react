import type {IReview} from "../../models/IProductModel.ts";
import type {FC} from "react";
import {RatingComponent} from "../rating-component/RatingComponent.tsx";
import '../product-component/product-component-style.css'

type IReviewPropsType = {
    review: IReview;
}

export const ReviewComponent: FC<IReviewPropsType> = ({review}) => {
    return (
        <div className={'review-container'}>
            <p className='font-semibold'>{review.reviewerName}</p>
            <RatingComponent rating={review.rating}/>
            <p>{review.comment}</p>
        </div>
    );
};