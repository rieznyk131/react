import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator.ts";
import './form-component-style.css'

type IFormProps = {
    brand: string,
    price: number,
    year: number
}

export const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });
    const customHandler = (formFataProps: IFormProps) => {
        console.log(formFataProps);
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(customHandler)} className="new-car-form">
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