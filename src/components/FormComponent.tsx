import {type FormEvent, useState} from "react";

interface IFormProps {
    username: string;
    password: string;
}



export const FormComponent = () => {
    const [formState, setFormState] = useState<IFormProps>({
        username: "default UN",
        password: "default PW",
    });


    const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        let userData = {
            username: formState.username,
            password: formState.password
        }

        console.log(userData);


    };

    // const  handlePasswordChange = (e: FormEvent<HTMLInputElement>)=> {
    //     const passwordInput = e.target as HTMLInputElement;
    //     setFormState({...formState, password: passwordInput.value});
    //     console.log(passwordInput);
    // };
    //
    // const  handleUsernameChange = (e: FormEvent<HTMLInputElement>)=> {
    //     const usernameInput = e.target as HTMLInputElement;
    //     setFormState({...formState, username: usernameInput.value});
    //     console.log(usernameInput);
    // };

    const  handleInputChange = (e: FormEvent<HTMLInputElement>)=> {
        const input = e.target as HTMLInputElement;

        console.log(input.name);
        setFormState({ ...formState, [input.name]: input.value });
    };



    return (
        <div>
            <form className="flex gap-5 m-10" onSubmit={handleSubmit}>
                <input className='border border-gray-400' type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input className='border border-gray-400' type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button className='border border-gray-400 h-10 w-18 bg-gray-200'>Send</button>
            </form>
        </div>
    );
};