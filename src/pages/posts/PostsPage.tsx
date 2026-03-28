import {ButtonComponent} from "../../components/button/ButtonComponent.tsx";

export const PostsPage = () => {
    return (
        <div className='w-full h-60 flex flex-row justify-center items-center gap-40 mt-10'>
           <ButtonComponent text={'Go to DummyJSON Posts'} endpoint={'dummyjson'}/>
           <ButtonComponent text={'Go to JSONPlaceholder Posts'} endpoint={'jsonplaceholder'}/>
        </div>
    );
};