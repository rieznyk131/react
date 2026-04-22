import type {FC} from "react";
import type {ICar} from "../../models/ICar.ts";

type CarProps = {
    car: ICar
}

export const CarComponent: FC<CarProps> = ({car}) => {
    return (
        <div className='w-48 h-40 flex flex-col gap-1 ml-10 border border-gray-600 rounded-xl p-3 bg-taupe-50'>
            <p><span className='font-bold text-lg'>Car ID: {car.id} </span></p>
            <p><span className='font-semibold'>Brand: </span>{car.brand}</p>
            <p><span className='font-semibold'>Price:</span> {car.price}</p>
            <p><span className='font-semibold'>Year:</span> {car.year}</p>
        </div>
    );
};