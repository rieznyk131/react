import {CarsListComponent} from "../cars-list-component/CarsListComponent.tsx";
import {useEffect, useState} from "react";
import type {ICar} from "../../models/ICar.ts";
import {getAllCars} from "../../services/api.service.ts";

// const LIMIT = 12;

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [visibleCount, setVisibleCount] = useState(20);
    const [visibleBtnUp, setvisibleBtnUp] = useState(false);

    useEffect(() => {
        getAllCars().then((data) => setCars(data));

        const handleScroll = () => {
            setvisibleBtnUp(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    },[])

    const visibleCars = cars.slice(0, visibleCount);

    return (
        <div className='h-full w-full'>
            <div><CarsListComponent cars={visibleCars}/></div>
            <div className='w-full flex justify-center items-center'>
                <button
                    onClick={() => {
                        setVisibleCount(prev => prev + 20)
                    }} className=' flex flex-col justify-center items-center font-semibold '>
                    Load More <img src="https://img.icons8.com/?size=60&id=102720&format=png&color=000000" alt=""/>
                </button>
            </div>
            {visibleBtnUp && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed right-5 bottom-5"
                >
                    <img src="https://img.icons8.com/?size=60&id=122841&format=png&color=000000" alt=""/>
                </button>
            )}
        </div>
    );
};