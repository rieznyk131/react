import {ButtonComponent} from "../../components/button/ButtonComponent.tsx";

export const CommentsPage = () => {
    return (
        <div className='w-full h-60 flex flex-row justify-center items-center gap-40 mt-10'>
            <ButtonComponent text={'Go to DummyJSON Comments'} endpoint={'dummyjson'}/>
            <ButtonComponent text={'Go to JSONPlaceholder Comments'} endpoint={'jsonplaceholder'}/>
        </div>
    );
};