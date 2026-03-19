import type {IReview} from "../../models/IProductModel.ts";
import type {FC} from "react";

type IReviewPropsType = {
    review: IReview;
}

export const ReviewComponent: FC<IReviewPropsType> = ({review}) => {
    return (
        <div className={'review-container'}>
            <p>Rating: {review.rating}</p>
            <p>{review.reviewerName}</p>
            <p>{review.comment}</p>
        </div>
    );
};