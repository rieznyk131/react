import '../../components/button/button-component-style.css'
import {ButtonComponent} from "../../components/button/ButtonComponent.tsx";

export const UsersPage = () => {
    return (
        <div className='w-full h-60 flex flex-row justify-center items-center gap-40 mt-10'>
            <ButtonComponent text={'Go to DummyJSON Users'} endpoint={'dummyjson'}/>
            <ButtonComponent text={'Go to JSONPlaceholder Users'} endpoint={'jsonplaceholder'}/>
        </div>
    )
};