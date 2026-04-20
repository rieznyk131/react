import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    password: string,
    age: number
}

export const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({mode: 'all'});
    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    }
    return (
        <div>
            <form className="flex gap-5 m-10" onSubmit={handleSubmit(customHandler)}>
                <label className='block'>
                    <input className='border border-gray-400' type="text" {...register('username', {
                    required: {value: true, message: "username is required"},
                    // pattern: {
                    //     value: /\w+/,
                    //     message: 'wrong name'
                    // }
                    minLength: {
                        value: 2,
                        message: 'too short'
                    }
                })}/>

                    {errors.username && <div className='text-red-600'>{errors.username.message}</div>}
                </label>
                <label className='block'>
                    <input className='border border-gray-400' type="text" {...register('password', {
                    required: true,
                    minLength: {
                        value: 3,
                        message: 'too short'
                    },
                    maxLength: {
                        value: 10,
                        message: 'too long'
                    }
                })}/>

                    {errors.password && <div className='text-red-600'>{errors.password.message}</div>}

                </label>
                <label>
                    <input className='border border-gray-400' type="number" {...register('age', {
                    required: true,
                    min: {value: 18, message: 'too young'},
                    max: {value: 117, message: 'too old'}
                })}/>
                    {errors.age && <div className='text-red-600'>{errors.age.message}</div>}
                </label>
                <button className='border border-gray-400 h-10 w-18 bg-gray-200' disabled={!isValid}>Submit</button>
            </form>
        </div>
    );
};