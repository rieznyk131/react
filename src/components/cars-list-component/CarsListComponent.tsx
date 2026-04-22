import {CarComponent} from "../car-component/CarComponent.tsx";
import type {ICar} from "../../models/ICar.ts";
import type {FC} from "react";

type CarsProps = {
    cars: ICar[];
}

export const CarsListComponent: FC<CarsProps> = ({cars}) => {

    return (
        <div>
            <div className='grid grid-cols-4 mt-16 gap-y-5 justify-items-center'>
                {
                    cars.map((car: ICar) => <CarComponent car={car} key={car.id}/>)
                }
            </div>

        </div>
    );
};