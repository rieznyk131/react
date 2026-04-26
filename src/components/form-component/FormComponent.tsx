import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator.ts";
import './form-component-style.css'
import type {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.ts";
import {useState} from "react";


export const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}, reset} = useForm<ICar>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });
    const [success, setSuccess] = useState(false);



    const customHandler = (data: ICar) => {
        addCar(data);
        reset();
        setSuccess(true);
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(customHandler)} className="new-car-form">
                {
                    success && (
                        <div className="success-message">
                            <img src="https://img.icons8.com/?size=70&id=91260&format=png&color=000000" alt=""/>
                            <p>Data successfully submitted</p>
                        </div>
                    )
                }
                <label>
                    <div className='input-brand'>
                        <p>Brand <sup>&#9913;</sup></p>
                        <div className="flex flex-col gap-0.3">
                            <input type="text" required {...register('brand')}/>
                            {errors.brand && <div className='error-msg'>{errors.brand.message}</div>}
                        </div>
                        <p className='input-description'>Letters only, 1–20 characters (Cyrillic or Latin), required
                            field</p>
                    </div>

                </label>
                <label>
                    <div className='input-price'>
                        <p>Price <sup>&#9913;</sup></p>
                        <div className="flex flex-col gap-0.3">
                            <input type="number" {...register('price')}/>
                            {errors.price && <div className='error-msg'>{errors.price.message}</div>}
                        </div>
                        <p className='input-description'>Number from 0 to 1,000,000, required field</p>
                    </div>

                </label>
                <label>
                    <div className='input-year'>
                        <p>Year <sup>&#9913;</sup></p>
                        <div className="flex flex-col gap-0.3">
                            <input type="number" {...register('year')}/>
                            {errors.year && <div className='error-msg'>{errors.year.message}</div>}
                        </div>
                        <p className='input-description'>Number from 1990 to 2026, required field</p>
                    </div>

                </label>
                <button className='submit-btn' type="submit" disabled={!isValid}>Submit</button>
            </form>

        </div>
    );
};