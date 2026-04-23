import {CarsComponent} from "../components/cars-component/CarsComponent.tsx";

export const HomePage = () => {
    return (
        <div>
            <h1 className='text-center mt-8 text-2xl'>Cars</h1>
        <CarsComponent/>
        </div>
    );
};