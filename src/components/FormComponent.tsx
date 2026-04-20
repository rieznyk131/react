import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/user.validator.ts";

interface IFormProps {
    username: string,
    password: string,
    age: number
}

export const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({mode: 'all', resolver: joiResolver(userValidator)});
    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    }
    return (
        <div>
            <form className="flex gap-5 m-10" onSubmit={handleSubmit(customHandler)}>
                <label className='block'>
                    <input className='border border-gray-400' type="text" {...register('username')}/>

                    {errors.username && <div className='text-red-600'>{errors.username.message}</div>}
                </label>
                <label className='block'>
                    <input className='border border-gray-400' type="text" {...register('password')}/>

                    {errors.password && <div className='text-red-600'>{errors.password.message}</div>}

                </label>
                <label>
                    <input className='border border-gray-400' type="number" {...register('age')}/>
                    {errors.age && <div className='text-red-600'>{errors.age.message}</div>}
                </label>
                <button className='border border-gray-400 h-10 w-18 bg-gray-200' disabled={!isValid}>Submit</button>
            </form>
        </div>
    );
};