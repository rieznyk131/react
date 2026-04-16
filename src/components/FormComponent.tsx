export const FormComponent = () => {
    return (
        <div>
            <form className="flex gap-5 m-10">
                <input className='border border-gray-400' type="text" name={'username'}/>
                <input className='border border-gray-400' type="text" name={'password'}/>
            </form>
        </div>
    );
};