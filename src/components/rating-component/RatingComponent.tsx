import type {FC} from "react";

type RatingPropsType = {
    rating: number;
}

export const RatingComponent: FC<RatingPropsType> = ({rating}) => {
    const ratingArray = [1,2,3,4,5]
    return (
        <div className={'rating'}>
            {
                ratingArray.map((star, index) =>(<span className='text-amber-400' key={index}>{star <= rating ? "★" : "☆"}</span>))
            }
        </div>
    );
};